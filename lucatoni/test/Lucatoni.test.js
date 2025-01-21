// test/Lucatoni.test.js
const Lucatoni = artifacts.require("Lucatoni");

contract("Lucatoni", accounts => {
    let token;
    const owner = accounts[0];
    const recipient = accounts[1];
    const initialSupply = 100000;

    beforeEach(async () => {
        token = await Lucatoni.new(initialSupply);
    });

    it("deberia establecer el nombre y simbolo correctamente", async () => {
        const name = await token.name();
        const symbol = await token.symbol();
        assert.equal(name, "Lucatoni");
        assert.equal(symbol, "LUCA");
    });

    it("deberia asignar el suministro inicial al creador", async () => {
        const balance = await token.balanceOf(owner);
        assert.equal(balance.toString(), (initialSupply * 10 ** 18).toString());
    });

    it("deberia permitir transferencias cuando no esta pausado", async () => {
        const amount = 1000;
        await token.transfer(recipient, amount);
        const balance = await token.balanceOf(recipient);
        assert.equal(balance.toString(), amount.toString());
    });

    it("deberia permitir al owner pausar las transferencias", async () => {
        await token.pause();
        try {
            await token.transfer(recipient, 1000);
            assert.fail("La transferencia deberia haber fallado");
        } catch (error) {
            assert(error.message.includes("Las transferencias estan pausadas"));
        }
    });

    it("deberia permitir quemar tokens", async () => {
        const amount = 1000;
        const initialBalance = await token.balanceOf(owner);
        await token.burn(amount);
        const finalBalance = await token.balanceOf(owner);
        assert.equal(
            initialBalance.sub(finalBalance).toString(),
            amount.toString()
        );
    });
});