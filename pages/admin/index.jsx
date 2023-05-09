import React, { useState, useEffect } from "react";
import Popup from "@/components/popup";
import { Form, Formik } from "formik";
import Input from "@/components/input";
import Button from "@/components/button";
import {
  useAddProdutMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetAllProductsQuery,
} from "@/api/product-api/product-api";
import { toast } from "react-toastify";
import Loader from "@/components/loader";
import { useLazyGetProductDetailsQuery} from "@/api/product-api/admin";
import { CiBluetooth } from "react-icons/ci";
import { icon } from "@fortawesome/fontawesome-svg-core";
const Index = () => {
  const [popup, setPopup] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [mode, setMode] = useState("add");
  const [idDelete, setIdDelete] = useState(null);
  const handleOpen = () => {
    setMode("add");
    setPopup(!popup);
    setDataFromResult(null);
  };
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();
  const [
    deleteProduct,
    { isSuccess: isSuccessDeleteProduct, isLoading: isLoadingDelete, reset },
  ] = useDeleteProductMutation();
  const [addProduct, { isSuccess: isSuccessAddProduct, data: productData }] =
    useAddProdutMutation();
  const [edit, { isSuccess: isSuccessUpdateProduct }] =
    useEditProductMutation();

  const [pro, setPro] = useState(data);
  useEffect(() => {
    if (isSuccess) {
      setPro(data);
    }
  }, [data, isSuccess, setPro]);
  const handleDelete = (item) => {
    deleteProduct({ id: item.id });
    const newData = pro.filter((el) => el.id !== item.id);
    setPro(newData);
  };

  useEffect(() => {
    if (isSuccessDeleteProduct) {
      setOpenDeletePopup(false);
      reset();
    }
  }, [isSuccessDeleteProduct,reset]);

  useEffect(() => {
    if (isSuccessDeleteProduct) {
      toast.success("Delete Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isSuccessDeleteProduct]);
  const [dataFromResult, setDataFromResult] = useState(null);
  const [trigger, result] = useLazyGetProductDetailsQuery();
  const handleEdit = (id) => {
    trigger({ id });
    setMode("edit");
  };
  useEffect(() => {
    if (result.isSuccess || result.isError) {
      result.isSuccess && setPopup(true);
    }
    setDataFromResult(result?.data);
  }, [result]);
  useEffect(() => {
    if (isSuccessUpdateProduct) {
      toast.success("Updated Successfuly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isSuccessUpdateProduct]);

  useEffect(() => {
    if (isSuccessUpdateProduct) {
      setPopup(false);
    }
  }, [isSuccessUpdateProduct]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  useEffect(() => {
    isSuccessAddProduct && setPopup(false);
    if (isSuccessAddProduct) {
      setPro([...pro, productData]);
      toast.success("Added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isSuccessAddProduct]);

  const handleDeleteItem = (item) => {
    setOpenDeletePopup(true);
    setIdDelete(item);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <Button
            className={"app-product"}
            bg={"#2196F3"}
            color={"white"}
            fontSize={"18px"}
            borderRadius={"20px"}
            padding={"10px 15px"}
            margin={"10px auto"}
            width={""}
            text={"Add Product"}
            dispaly={"block"}
            fontWeight={"500"}
            hoverBg={"white"}
            hoverText={"#2196F3"}
            borderHover={"3px solid #2196F3"}
            border={"3px solid #2196F3"}
            onClick={handleOpen}
          />
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left  ">
              <thead className="text-xs  uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center ">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 w-[200px] text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {pro?.map((item, key) => (
                  <>
                    <tr key={key} className="bg-white border-b   ">
                      <th className="text-center"> {item.id} </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap "
                      >
                        {item.title.slice(0, 30)}...
                      </th>
                      <td className="px-6 py-4 ">{item.price}$</td>
                      <td className="px-6 py-4 ">{item.category}</td>
                      <td className="px-6 py-4 ">
                        {item?.description.slice(0, 30)}...
                      </td>
                      <td className="px-6 py-4 flex justify-between ">
                        <Button
                          bg={"green"}
                          borderRadius={"10px"}
                          text={result.isLoading ? "Loading..." : "Edit"}
                          className={"edit"}
                          color={"white"}
                          fontWeight={"bold"}
                          width={"40%"}
                          padding={"10px"}
                          margin={"0px 10px"}
                          onClick={() => handleEdit(item.id)}
                        />
                        <Button
                          bg={"red"}
                          borderRadius={"10px"}
                          text={"Delete"}
                          className={"delete"}
                          color={"white"}
                          fontWeight={"bold"}
                          width={"40%"}
                          padding={"10px"}
                          // onClick={() => handleDelete(item)}
                          onClick={() => handleDeleteItem(item)}
                          margin={"0px 10px"}
                        />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Popup
            isOpen={openDeletePopup}
            handleToogle={() => setOpenDeletePopup(false)}
            height={"150px"}
            smWidth={"300px"}
            titlePopup={"Are you sure?"}
            headerColor={"#D10024"}
            marginTop={"10px"}
            padding={"15px 30px"}
            center={"center"}
          >
            <p className="capitalize mb-[25px] font-[500]">
              you are about delete this product.
            </p>
            <div className="flex justify-between">
              <Button
                className={"yes"}
                text={`${isLoadingDelete ? "isLoading.." : "Yes"}`}
                onClick={() => handleDelete(idDelete)}
                bg={"#D10024"}
                color={"white"}
                padding={"10px 40px"}
                borderRadius={"5px"}
                fontWeight={"600"}
                margin={"auto 20px "}
              />
              <Button
                className={"no"}
                text={"No"}
                onClick={() => setOpenDeletePopup(false)}
                bg={"#bbb"}
                color={"white"}
                padding={"10px 40px"}
                borderRadius={"5px"}
              />
            </div>
          </Popup>

          <Popup
            isOpen={popup}
            handleToogle={handleOpen}
            mode={mode}
            titlePopup={result.data ? "Update Product" : "Add Product"}
            height={"auto"}
            smWidth={"400px"}
            borderbottom={" 2px solid #423e3e"}
            icon={icon}
            marginTop={"25px"}
          >
            <div className="py-3 px-5">
              <Formik
                enableReinitialize
                initialValues={
                  result.data
                    ? {
                        title: dataFromResult?.title,
                        price: dataFromResult?.price,
                        description: dataFromResult?.description,
                        category: dataFromResult?.category,
                      }
                    : {
                        title: "",
                        price: "",
                        description: "",
                        category: "",
                      }
                }
                onSubmit={(values, { resetForm }) => {
                  result.data
                    ? edit({
                        title: values.title,
                        price: values.price,
                        description: values.description,
                        category: values.category,
                        image: selectedImage,
                        id: dataFromResult?.id,
                      })
                    : addProduct({
                        title: values.title,
                        price: values.price,
                        description: values.description,
                        category: values.category,
                        image: selectedImage,
                      });
                  resetForm();
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="mb-[10px]">
                      <Input
                        className={"title"}
                        name={"title"}
                        type={"text"}
                        placeholder={"Enter title"}
                        label={"Title"}
                        width={"100%"}
                        bg={""}
                        border={"1px solid #ccc"}
                        borderRadius={"4px"}
                        color={"#444"}
                        fontSize={"16px"}
                        height={""}
                        margin={"0px 0px 0px 0px"}
                        padding={"8px 15px"}
                        id={"title"}
                        iconLable={""}
                      />
                    </div>
                    <div className="mb-[10px]">
                      <Input
                        className={"price"}
                        name={"price"}
                        type={"number"}
                        placeholder={"Enter Price"}
                        label={"Price"}
                        width={"100%"}
                        bg={""}
                        border={"1px solid #ccc"}
                        borderRadius={"4px"}
                        color={"#444"}
                        fontSize={"16px"}
                        height={""}
                        margin={"0px 0px 0px 0px"}
                        padding={"8px 15px"}
                        id={"price"}
                      />
                    </div>
                    <div className="mb-[10px]">
                      <Input
                        className={"description"}
                        name={"description"}
                        type={"text"}
                        placeholder={"Enter description"}
                        label={"description"}
                        width={"100%"}
                        bg={""}
                        border={"1px solid #ccc"}
                        borderRadius={"4px"}
                        color={"#444"}
                        fontSize={"16px"}
                        height={""}
                        margin={"0px 0px 0px 0px"}
                        padding={"8px 15px"}
                        id={"description"}
                      />
                    </div>
                    <div className="mb-[10px]">
                      <Input
                        className={"category"}
                        name={"category"}
                        type={"text"}
                        placeholder={"Enter category"}
                        label={"category"}
                        width={"100%"}
                        bg={""}
                        border={"1px solid #ccc"}
                        borderRadius={"4px"}
                        color={"#444"}
                        fontSize={"16px"}
                        height={""}
                        margin={"0px 0px 0px 0px"}
                        padding={"8px 15px"}
                        id={"category"}
                      />
                    </div>
                    {/* {selectedImage ? (
                      <img src={selectedImage} alt="test" />
                    ) : null} */}
                    <input type="file" onChange={handleImageChange} />
                    <Button
                      text={mode === "add" ? "Add Product" : "Edit Product"}
                      className={"add"}
                      type={"submit"}
                      bg={"#2196F3"}
                      border={"2px solid #2196F3"}
                      borderRadius={"4px"}
                      color={"white"}
                      hoverBg={"blue"}
                      hoverText={"white"}
                      margin={"50px 0px 10px 0px"}
                      padding={"8px 15px"}
                      width={"100%"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      // disabled={isSuccessAddProduct ? true : false}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </Popup>
        </div>
      )}
    </>
  );
};

export default Index;
