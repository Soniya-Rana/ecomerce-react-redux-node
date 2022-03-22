import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../app/storeActions/categoryActions";

const GetAllCategory = () => {
  const dispatch = useDispatch();
  const Categories = useSelector((state) => state.category.AllCategories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return <>{console.log(Categories)}</>;
};

export default GetAllCategory;
