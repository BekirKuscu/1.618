import React, {useState, useEffect} from 'react';
import { Cloudinary } from 'cloudinary-core';

export default function Header() {

	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState(null);
	const [imageURL, setImageURL] = useState("");

	const uploadImage = async e => {
		const files = e.target.files
		const data = new FormData()
		data.append('file',files[0])
		data.append('upload_preset', 'wasteimages')
		setLoading(true)

		const res1 = await fetch("", {
			method: 'POST',
			body: data
		})

		const file = await res1.json()
		console.log("Image Uploaded:");
		console.log(file.secure_url);
		setImageURL(file.secure_url);

		const file1 = await fetch('', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				"image" : file.secure_url
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setImage(data.predict)	
			setLoading(false)
		})
		.catch(err=>{
            console.log(err);
			console.log("Some Error while processing the image.")
		})
	}

	function refreshPage() {
		window.location.reload(false);
	}

	return (
    	<div>
        	<section class="ui-section-hero">
        	<div class="ui-layout-container">
          		<div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
            		<div>
            		<h1>Rubbish Classification
					</h1>
              		<p class="ui-text-intro">We know that your life is of no value but the life of our planet does! So, help us segregate waste according to the category.</p>
              
              		<div class="ui-component-cta ui-layout-flex">
           
						<input type="file" id="InputFile" name = "file"
							onChange={uploadImage} />

                  		<button onClick={refreshPage} className="display-button">Reset</button>
              		</div>
            	</div>
            
            	<img src="https://media3.giphy.com/media/fnMNa6NRShQgvw5BJs/giphy.gif?cid=ecf05e47uy0z1k3ka1ce56qde3ow31wo5a2tlzov3tiopryt&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
        	</div>
			<div>
				{
					loading ? (
						<img className="loading-gif" src="https://media1.giphy.com/media/daxHPlbrWMnS2MsrE1/giphy.gif?cid=ecf05e47fywbxrtrdaz8rn9aq3r83yuj3h9x6mlmjsifi2rq&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
					) : (
						<div className="display-image">
							<img className="waste-image" src={imageURL} />
						</div>
					)
				}
			<div className="waste-type-div">
				<h2 class='waste-heading'>{image}</h2>
			</div>	
			</div>
        </div>
    	</section> 
    </div>
  );
}
