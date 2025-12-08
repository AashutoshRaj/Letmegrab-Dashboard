import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateForm from "./UpdateForm";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const [search, setSearch] = useState("");
  // const { pId } = useParams();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=10"
        );
        console.log("get response product", response.data )
        setProducts(response.data);
      } catch (error) {
        console.log("Something went wrong to get products", error);
      }
    };
    getAllProducts();
  }, []);

  // View
  const handleSubmitView = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log("check response", response.data);

      setViewProduct(response.data);
    } catch (error) {
      console.log("Not getting the product detail", error);
    }
  };

  const handleSubmitCloseClick = () => {
    setViewProduct(null);
    setIsEdit(null);
  
  };

  // Update
  const handelSubmitUpdate = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log("check response", response.data);
      setIsEdit(response.data);
      
    } catch (error) {
      console.log("Not getting the product update popup", error);
    }
  };

  // Delete
  const handelSubmitDelete = async (id) => {
    try {
      const deleteResponse = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log("check delete response", deleteResponse.data);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.log("Not getting the product update function", error);
      toast.error("Delete failed!");
    }
  };

  const editHandleSubmit = () => {
    setIsEdit(true);
  };

  // Search
 const searchProducts = products.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);


  return (
    <>
    <div className="text-center mt-5 max-w-600px w-full max-w-[800px] m-auto">
      <input 
      type="search" placeholder="Search Product" className="w-full border border-[#333] p-5 rounded-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {searchProducts.length > 0 ? (
              searchProducts.map((item,index) => (
                <div key={index} className="p-4 border rounded-xl">
                  <img src={item.image} className="w-20 h-20 mx-auto" />
                  <h3 className="font-semibold mt-3">{item.title}</h3>
                  <p className="text-sm">$ {item.price} </p>
                </div>
              ))
            ) : (
              <p>No Products Found</p>
            )}
</div>
        )}
      
    </div>
      <div className="max-w-[90%] sm:max-w-[1366px] w-full m-auto my-4 bg-[#fff] mt-10 rounded-xl overflow-auto sm:overflow-hidden">
        <table className="w-full">
          <thead className="bg-[var(--primary-color)]">
            <tr>
              <th className="min-w-[200px] py-4 px-5 text-left text-white font-bold">
                Product Title
              </th>
              <th className="min-w-[200px] py-4 px-5 text-left text-white font-bold">
                Product Price
              </th>
              <th className="min-w-[200px] py-4 px-5 text-left text-white font-bold">
                Product Description
              </th>
              <th className="min-w-[200px] py-4 px-5 text-left text-white font-bold">
                Product Category
              </th>
              <th className="min-w-[200px] py-4 px-5 text-left text-white font-bold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {products?.map((items) => (
              <tr key={items.id} className="border-b border-[#dfdfdf]">
                <td className="py-4 px-5">{items.title}</td>
                <td className="py-4 px-5">${items.price}</td>
                <td className="py-4 px-5">{items.description}</td>
                <td className="py-4 px-5">{items.category}</td>
                <td className="py-4 px-5">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSubmitView(items.id)}
                      className="bg-[#adadf7] px-4 py-2 rounded-md text-white cursor-pointer"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handelSubmitUpdate(items.id)}
                      className="bg-[#e6cc7d] px-4 py-2 rounded-md text-white cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handelSubmitDelete(items.id)}
                      className="bg-[#ff5656] px-4 py-2 rounded-md text-white cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {viewProduct && (
        <div
          onClick={handleSubmitCloseClick}
          className="fixed top-0 left-0 w-full h-screen bg-[#0000008a] flex justify-center items-center"
        >
          <div
            className="bg-white p-15 rounded-xl max-w-[800px] w-full relative grid sm:grid-cols-2 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="">
              <img
                src={viewProduct.image}
                alt=""
                className="w-32 mx-auto mb-4"
              />
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-4">{viewProduct.title}</h2>
              <p>
                <strong>Price:</strong> ${viewProduct.price}
              </p>
              <p>
                <strong>Category:</strong> {viewProduct.category}
              </p>
              <p className="mt-3">{viewProduct.description}</p>
            </div>
            <button
              onClick={handleSubmitCloseClick}
              className="cursor-pointer text-black  px-4  py-2 rounded absolute top-0 right-0"
            >
              {" "}
              ×
            </button>
          </div>
        </div>
      )}

      {isEdit && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#0000008a] flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl max-w-[500px] w-full relative">
            <h3 className="text-xl font-bold mb-3">Edit Details</h3>

            <form onSubmit={editHandleSubmit}>
              <div className="mt-3">
                <label className="font-semibold">Title</label>

                <input
                  type="text"
                  defaultValue={isEdit.title}
                  className="border w-full p-2 rounded mt-2"
                  onChange={""}
                />
              </div>

              <div className="mt-3">
                <strong>Price:</strong>

                <input
                  type="text"
                  defaultValue={isEdit.price}
                  className="border w-full p-2 rounded mt-2"
                  onChange={""}
                />
              </div>

              <div className="mt-3">
                <strong>Category</strong>
                <input
                  type="text"
                  defaultValue={isEdit.category}
                  className="border w-full p-2 rounded mt-2"
                  onChange={""}
                />
              </div>

              <div className="mt-3">
                <strong>Description</strong>
                <textarea
                  type="text"
                  defaultValue={isEdit.description}
                  className="border w-full p-2 rounded mt-2"
                  onChange={""}
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white px-4 py-2 mt-4 rounded"
              >
                Save
              </button>
            </form>

            <button
              onClick={handleSubmitCloseClick}
              className="cursor-pointer text-black px-4 py-2 rounded absolute top-0 right-0"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTable;
