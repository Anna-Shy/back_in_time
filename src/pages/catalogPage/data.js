import { catalogArray } from "../../source/data/products";

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL"];

// letter sizes in their usual order, then shoe sizes by number, then "One size"
const sizeRank = (size) => {
    const letter = SIZE_ORDER.indexOf(size);
    if (letter !== -1) return letter;
    if (!Number.isNaN(Number(size))) return 100 + Number(size);
    return 1000;
};

const compareSizes = (a, b) => sizeRank(a) - sizeRank(b);

// filter options are built from the products, so a new brand or size
// appears in the filter as soon as such a product is added
const optionsFor = (field, compare = (a, b) => a.localeCompare(b)) => [
    { id: "all", value: "", name: "All" },
    ...[...new Set(catalogArray.map((item) => item[field]).filter(Boolean))]
        .sort(compare)
        .map((value) => ({ id: value, value, name: value }))
];

export const typeFilterArray = optionsFor("type");
export const genderFilterArray = optionsFor("sex");
export const sizeFilterArray = optionsFor("size", compareSizes);
export const brandFilterArray = optionsFor("brand");
