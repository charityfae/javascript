const kilograms = [5, 10, 8, 12, 16];
const branches = ["matugga", "maganjo"];
const products = ["beans", "Maize grain", "Soybeans", "Gnuts"];
const users = ["Manager", "Director", "Attendants"];
const suppliers = ["Mandela Millers", "Johnson and Sons", "Legume House", "Home of Seeds"];

const salesRecords = [
    { produce: "Beans", buyer: "Michael", amountPaid: 50000, salesAgent: "Alice", date: "2025-02-10" },
    { produce: "Soybeans", buyer: "Sarah", amountPaid: 80000, salesAgent: "Brian", date: "2025-02-11" }
];

const trustedBuyers = [
    { name: "James Ouma", NIN: "CM1234567890AB", amountDue: 150000, dueDate: "2025-03-01" },
    { name: "Mariam Njeri", NIN: "CM9876543210XY", amountDue: 200000, dueDate: "2025-03-05" }
];

const salesAgents = [
    { name: "Alice", NIN: "CA1234567890AB", experience: 5, sales: 100 },
    { name: "Brian", NIN: "CB9876543210XY", experience: 3, sales: 80 },
    { name: "Charlie", NIN: "CC12345678TZ", experience: 2, sales: 100 }
];

const inventory = {
    beans: { available: 1000, sold: 200 },
    maize: { available: 500, sold: 300 },
    soybeans: { available: 800, sold: 100 },
    gnuts: { available: 1200, sold: 150 }
};

const branchesInventory = {
    matugga: { beans: 500, maize: 300, soybeans: 200, gnuts: 100 },
    maganjo: { beans: 600, maize: 400, soybeans: 250, gnuts: 150 }
};

const salesAgentNames = ["John", "Gloria", "Joel"];

console.log("Sales so far:", salesRecords);
console.log("Number of inventory items:", Object.keys(inventory).length);

suppliers.forEach((supplier, index) => {
    console.log(`Supplier ${index + 1}:`, supplier);
});
