import React, {useEffect, useState } from 'react'
import Layout from '../../componet/layout/layout'
import AdminMenu from '../../componet/layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Select } from 'antd'
const {Option} = Select


const CreateProduct = () => {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [photo, setPhoto] = useState("")
  const [quantity, setQuantity] = useState("")
  const [shipping, setShipping] = useState("")


  //get All Categary

  const getAllCategory = async () => {
    try {
      const {data} = await axios.get('/api/v1/category/get-category')
      if(data.success){
        setCategories(data.categary)
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Something  went wrong");
      
    }
  }
  useEffect(() => {
    getAllCategory();
  },[]);



  return (
    <Layout title={"Dashboard - Create Product"}>
      
       <div className='container-fluid m-3 p-3 t-300' >
       
      <div className='row ' >
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>Create  Product</h1>
            <div className='m-1 w-75'>
              <Select bordered = {false}
              placeholder ='Select a category'
              size='large'
              showSearch
              className='form-select mb-3' 
              onChange={(value) => {setCategories(value)}}>
                {categories?.map(c => (
                  <Option key={c._id} value={c.name}>{c.name}</Option>
                ))}
              </Select>
              <div className='mb-3'>
                <label 
                className='btn btn-outline-secondary col-md-12'>
                  {photo ? photo.name : "Upload Photo" }
                <input type='file' name='photo'
                accept='image/*'
                onChange={(e) => setPhoto(e.target.files[0])} id=''
                hidden />
                </label>
              </div>
              <div className='mb-3'>
                {photo && (
                  <div className='text-center'>
                    <img
                    src={URL.createObjectURL(photo)}
                    alt='product_photo'
                    height={'200px'}
                    className='img img-responsive'
                    />
                  </div>
                )}

              </div>
              <div className='mb-3'>
                <input
                type='text'
                value={name}
                placeholder='write a name'
                className='form-control'
                onChange={(e) => setName(e.target.value)}/>

              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              </div>
                  
            </div>
        </div>
        </div>
        
     
        
    </Layout>
  )
}

export default CreateProduct