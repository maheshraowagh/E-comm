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
        const filteredProducts = cat ? originalProducts.filter((product) => product.category === cat) : originalProducts;
        const searchedProducts = filteredProducts.filter((product) => 
            product.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setAllProducts(searchedProducts);
    };

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchItem(searchText);

        const filteredProducts = selectProducts ? originalProducts.filter((product) => product.category === selectProducts) : originalProducts;
        const searchedProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(searchText)
        );
        setAllProducts(searchedProducts);
    };

    return (
        <>
            <div className="mt-5 text-center px-4 md:px-1 text-xl">
                <input
                    className="border-2 px-4 py-3 text-black rounded-3xl w-full sm:w-auto"
                    type="text"
                    placeholder="Search items"
                    value={searchItem}
                    onChange={handleSearch}
                />
            </div>
            {/* <div className="text-center mt-3">
                <select className="border text-white bg-black px-2 py-2 my-3 w-full sm:w-auto" onChange={(e) => filterProducts(e.target.value)}>
                    <option value="">Filter by categories</option>
                    {allCategories.slice(0, 6).map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div> */}

            <div className="flex flex-wrap my-6 w-full px-4 sm:px-14">
                {allProducts.map((allPro, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <div className="border-2 p-4 flex flex-col h-full">
                            <Link to={`/SingleProductPage/${allPro.id}`}>
                                <img className="object-cover h-48 w-full mb-4" src={allPro.thumbnail} alt={allPro.title} />
                            </Link>
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <p className="text-md mt-1">Title: {allPro.title}</p>
                                    <p className="text-md mt-1">Price: ${allPro.price}</p>
                                    <p className="text-md mt-1">Rating: {allPro.rating}</p>
                                </div>
                                <div className="flex justify-end mt-4">
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
