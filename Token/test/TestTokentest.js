const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test token", function () {
	it("Should return owner of token", async function () {
		const [owner] = await ethers.getSigners();
		const TestToken = await ethers.getContractFactory("TestToken");
		const testToken = await TestToken.deploy();
		await testToken.deployed();
		const ownerAddress = await testToken.owner();
		expect(await ownerAddress).to.equal(owner.address);
	});
});
