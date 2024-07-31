import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = ({ AddToCart }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [selectProducts, setSelectProducts] = useState('');
    const [originalProducts, setOriginalProducts] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setAllProducts(response.data.products);
                setOriginalProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchAllProducts();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products/categories");
                setAllCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
    }, []);

    const filterProducts = (cat) => {
        setSelectProducts(cat);
        const data = cat ? originalProducts.filter((filterItems) => filterItems.category === cat) : originalProducts;
        setAllProducts(data);
    };

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchItem(searchText);

        const searched = originalProducts.filter((filterSearch) =>
            filterSearch.title.toLowerCase().includes(searchText)
        );
        setAllProducts(searched);
    };

    return (
        <>
            <div className="mt-5 text-center text-xl">
                <input
                    className="border-2 px-16 py-3 text-black rounded-3xl"
                    type="text"
                    placeholder="Search items"
                    value={searchItem}
                    onChange={handleSearch}
                />
            </div>
            <select className="border text-white bg-black px-2 py-2 my-3 mx-[6vw]" onChange={(e) => filterProducts(e.target.value)}>
                <option value="">Filter by categories</option>
                {allCategories.slice(0, 6).map((cat, index) => (
                    <option key={index} value={typeof cat === 'object' ? cat.name : cat}>
                        {typeof cat === 'object' ? cat.name : cat}
                    </option>
                ))}
            </select>

            <div className="flex flex-wrap my-6 w-full mx-14">
                {allProducts.map((allPro, index) => (
                    <div key={index} className="inline-block relative mx-9 px-7 my-9">
                        <div className="w-[300px] h-[400px] border-2 my-5 flex flex-col justify-between">
                            <Link to={`/SingleProductPage/${allPro.id}`}>
                                <img className="object-cover h-[200px] mx-auto" src={allPro.thumbnail} alt={allPro.title} />
                            </Link>
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <p className="text-md mt-1 px-2">Title: {allPro.title}</p>
                                    <p className="text-md mt-1 px-2">Price: ${allPro.price}</p>
                                    <p className="text-md mt-1 px-2">Rating: {allPro.rating}</p>
                                </div>
                                <div className="flex justify-end mb-4 px-2">
                                    <button
                                        onClick={() => AddToCart(allPro)}
                                        className="border bg-blue-500 text-white font-semibold px-2 py-2 hover:bg-blue-700"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllProducts;
