import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalContext } from "../myCongtext/MyContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxToolKit-store/productSlice";
import "./ProductDetails.css";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import hema from "../assets/Hema.jpg"
import baba from '../assets/Baba.jpeg'
import narendra from "../assets/Narendra.png"
import { Link } from "react-router-dom";


const ProductDetails = () => {

    const { id } = useParams(); // Get product ID from URL
    const { data } = useContext(globalContext); // Get all products from context
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(null);
    // Sample reviews data
    const reviews = [
        {
            id: 1,
            name: "Hema",
            date: "10 May 2025",
            rating: 5,
            text: "Great Product and Premium Feel.",
            avatar: hema
        },
        {
            id: 2,
            name: "Nitish Ck",
            date: "15 June 2025",
            rating: 5,
            text: "Very Good Quality for this Price. Battery Backup is Excellent.",
            avatar: "https://ui-avatars.com/api/?name=CK&background=EF4444&color=fff"
        },
        {
            id: 3,
            name: "Anjali",
            date: "25th March 2024",
            rating: 5,
            text: "Super Comfortable and Lightweight",
            avatar: "https://ui-avatars.com/api/?name=Anjal&background=14B8A6&color=fff"
        },
        {
            id: 4,
            name: "Ram Kumar",
            date: "11th December 2024",
            rating: 4,
            text: "Packaging was great and the Quality Impressed me a Lot!",
            avatar: "https://ui-avatars.com/api/?name=Ram+Kumar&background=7C3AED&color=fff"
        },
        {
            id: 5,
            name: "Narendra",
            date: "1st August 2023",
            rating: 4,
            text: "Happy with the Purchase!",
            avatar: narendra
        },
        {
            id: 6,
            name: "Baba",
            date: "20th January 2023",
            rating: 4,
            text: "Sound Quality is Good, but could Improve more.",
            avatar: baba
        }
    ];


    // toggle function
    const handleTabClick = (tab) => {
        if (activeTab === tab) {
            setActiveTab(null); // collapse if clicked again
        } else {
            setActiveTab(tab);
        }
    };
    // Find the selected product
    const product = data.find((item) => item.id.toString() === id);

    const [mainImage, setMainImage] = useState(product?.image || "");

    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        if (product) {
            if (product.images && product.images.length > 0) {
                setMainImage(product.images[0]);
            } else {
                setMainImage(product.image);
            }

            // ✅ filter products by category
            const filtered = data.filter(
                (p) => p.category === product.category && p.id !== product.id
            );
            setRelatedProducts(filtered);
        }
    }, [product, data]);
    if (!product) {
        return (
            <h1 className="text-center text-red-500 text-3xl mt-10">
                Product Not Found
            </h1>
        );
    }

    return (
        <>
            <div className="d-flex bg-dark mx-5 mt-5 product-container">
                {/* Left Image Section */}
                <div className="d-flex image-wrapper">
                    {/* Thumbnails */}
                    <div className="d-flex flex-column thumbnails">
                        {product.images && product.images.length > 0 ? (
                            product.images.map((img, index) => (
                                <img
                                    key={index}
                                    className="mb-2 border border-white product_details_small_image_width cursor-pointer"
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))
                        ) : (
                            <img
                                src={product.image}
                                alt="Main Thumbnail"
                                className="border border-white product_details_small_image_width"
                            />
                        )}
                    </div>

                    {/* Main Image */}
                    <div className="main-image ms-3">
                        <img style={{ width: "44vw" }} src={mainImage} alt={product.title} />
                    </div>
                </div>

                {/* Right Product Info Section */}
                <div className="product_details_right ms-5">
                    <h3 className="text-white">{product.title}</h3>
                    <p className="text-white">{product.info}</p>

                    {/* Ratings */}
                    <span>
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className="fa-solid fa-star"
                                style={{ color: "#ff4500" }}
                            ></i>
                        ))}
                        <span className="text-white"> | {product.ratings} Ratings</span>
                    </span>

                    <hr className="text-white" />

                    {/* Price and Stock */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="card-text text-white fs-2 fw-bold m-1 d-inline">
                                ₹{product.finalPrice}
                            </p>
                            {product.originalPrice && (
                                <p className="card-text text-white fs-5 d-inline text-decoration-line-through">
                                    ₹{product.originalPrice}
                                </p>
                            )}

                            <p style={{ color: "rgb(0, 255, 0)" }}>
                                You save: ₹5,34 (33%)
                            </p>

                            <p className="text-white">(Inclusive of all taxes)</p>
                        </div>
                        <div>
                            <button disabled className="border-0 text-white p-1 mt-5 product_details_stock_button text-nowrap cursor-default">
                                <i className="fa-solid fa-check fa-sm"></i>
                                <strong className="text-white ">
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </strong>
                            </button>
                        </div>
                    </div>

                    <hr className="text-white" />

                    {/* Offers */}
                    <h5 className="text-white">Offers And Discounts</h5>
                    <div className="d-flex font_size_product" style={{ gap: "0 20px", paddingTop:"10px" }}>
                        <p className="border border-white text-white fs-5 rounded-2 p-3">
                            No Cost EMI on Credit Card
                        </p>
                        <p className="border border-white text-white fs-5 rounded-2 p-3 ">
                            Pay Later & Avail Cashback
                        </p>
                    </div>

                    <hr className="text-white" />

                    {/* Add to Cart Button */}
                    <button
                        className="rounded-2 border-0 text-white p-2 product_details_right_button"
                        onClick={() => { dispatch(addToCart(product)); toast.success(`${product.title} added to cart!`) }}
                    >
                        Add to Cart
                    </button>
                </div>

            </div>

            <div className="bg-black text-white pt-4 pb-1 mt-10">
                {/* Tabs */}
                <div className="flex justify-center gap-60 ppppp  mb-6">
                    <button
                        onClick={() => handleTabClick("specifications")}
                        className={`px-6 u py-2 text-lg font-semibold rounded gappppp transition
            ${activeTab === "specifications" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Specifications
                    </button>
                    <button
                        onClick={() => handleTabClick("overview")}
                        className={`px-6 py-2 text-lg font-semibold rounded gappppp transition
            ${activeTab === "overview" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleTabClick("reviews")}
                        className={`px-6 py-2 text-lg font-semibold rounded gappppp transition
            ${activeTab === "reviews" ? "bg-orange-500" : "bg-transparent"}
          `}
                    >
                        Reviews
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "specifications" && (
                        <div className="grid grid-cols-2 gap-2 text-white specificationWidth w-[600px] mx-auto pt-15 pl-40 pb-20">
                            <p className="font-black text-1xl paddingbrand">Brand</p>
                            <p className="font-black text-1xl">{product.brand}</p>

                            <p className="font-black text-1xl">Model</p>
                            <p className="font-black text-1xl">{product.title}</p>

                            <p className="font-black text-1xl">Generic Name</p>
                            <p className="font-black text-1xl">{product.category}</p>

                            <p className="font-black text-1xl">Headphone Type</p>
                            <p className="font-black text-1xl">{product.type}</p>

                            <p className="font-black text-1xl">Connectivity</p>
                            <p className="font-black text-1xl">{product.connectivity}</p>

                            <p className="font-black text-1xl">Microphone</p>
                            <p className="font-black text-1xl">Yes</p>
                        </div>

                    )}

                    {activeTab === "overview" && (
                        <div className="pt-15 pb-20 pl-20">
                            <h2 className="text-xl font-bold mb-2">Overview</h2>
                            <p> The  <span className="text-danger fw-bolder fs-5">{product.title} </span>  {product.type} Headphones
                                provides with fabulous sound quality</p>
                            <ul className="list-disc pl-6">
                                <li>Sound Turned ro Perfection</li>
                                <li>Comfartable to Wear</li>
                                <li>Long Lours Playback Time</li>

                            </ul>

                            <p className="text-lg">Buy the {product.title}  {product.type} which offers you with fabulous music experience
                                by providing you with awesome sound quality that you can never move on from.<br /> Enjoy perfect flexibility
                                and mobility with amazing musical quality with these Earbuds giving you a truly awesome audio experience.
                                It blends with exceptional sound <br />quality and a range of smart features for an unrivalled listening experience.</p>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="mt-6 text-white pt-15 pb-20 pl-20">
                            <h2 className="text-2xl font-bold mb-5">Reviews</h2>
                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="flex items-start space-x-4">
                                        {/* Avatar */}
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full"
                                        />

                                        {/* Review Content */}
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold">{review.name}</h3>
                                                {/* <span className="text-gray-400 text-sm">{review.date}</span> */}
                                            </div>

                                            {/* Rating */}
                                            <div className="flex text-red-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={i < review.rating ? "text-red-500" : "text-gray-500"}
                                                    />
                                                ))}
                                                <span className="text-gray-400 text-sm pl-2">({review.date})</span>

                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-300 mt-1">{review.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="container-fluid bg-dark pb-5">
                <h3 className="text-center text-white pt-[100px]! pb-[50px]! text-[50px]!">Related Products</h3>

                <div className="container">
                    <div className="row justify-content-center gx-4 gy-4">
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((prod) => (
                                <div
                                    key={prod.id}
                                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                                >
                                    <div className="card h-100 bg-dark border border-white text-white">
                                        <Link to={`/product/${prod.id}`}>
                                            <img
                                                src={prod.images?.[0] || prod.image}
                                                className="p-10"
                                                alt={prod.title}
                                            />
                                        </Link>
                                        <div className="card-body card_font_s">
                                            <div className="pt-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className="fas fa-star text-warning"
                                                    ></i>
                                                ))}
                                            </div>
                                            <h5 className="card-title">{prod.title}</h5>
                                            <p className="card-text">{prod.info}</p>
                                            <hr />
                                            <h4 className="product_font_head">
                                                ₹{prod.finalPrice}{" "}
                                                <span className="text-muted">
                                                    <s className="font_mute_c">
                                                        ₹{prod.originalPrice}
                                                    </s>
                                                </span>
                                            </h4>

                                            <button
                                                type="button"
                                                className="btn card_button_bottom w-100"
                                                onClick={() => { dispatch(addToCart(product)); toast.success(`${product.title} added to cart!`) }}
                                            >
                                                <i className="fas fa-shopping-cart"></i> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-white">
                                No related products found.
                            </p>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetails;