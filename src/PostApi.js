import React, {useState} from 'react';
import axios from 'axios';

const PostApi = () => {

   let [product, setProduct] = useState(
    {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    }
   )
   let {title, price, description, image, category} = product;

   function addProduct(e){
       e.preventDefault()
       if(!title || !price || !description || !image || !category){
           alert("Please fill all the data")
       }
        axios.post("https://fakestoreapi.com/products",product)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
   }


    return(
        <div>
                 <form onSubmit={addProduct}>
                    <input type="text" placeholder="Enter title" 
                       onChange={(e) => setProduct({...product, title: e.target.value})}
                    />
                     
                    <input type="text" placeholder="Enter price"
                          onChange={(e) => setProduct({...product, price: e.target.value})}
                    />
                    <input type="text" placeholder="Enter description"
                            onChange={(e) => setProduct({...product, description: e.target.value})}
                    />
                    <input type="text" placeholder="Enter image"
                            onChange={(e) => setProduct({...product, image: e.target.value})}
                    />
                    <input type="text" placeholder="Enter category"
                            onChange={(e) => setProduct({...product, category: e.target.value})}
                    />
                    <button type="submit">Submit</button>
                 </form>
        </div>
    )
}

export default PostApi;