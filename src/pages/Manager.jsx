import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../config'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const Manager = () => {
  //
  const navigate = useNavigate()
  const { submitData, productId } = useContext(AppContext)
  const [imageUrl, setImageUrl] = useState()
  const [downloadURL, setDownloadUrl] = useState()
  const [addImage, setAddImage] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: '',
    quantity: 0,
  })
  const [isError, setIsError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      formData.name === '' ||
      formData.price === 0 ||
      formData.category === '' ||
      formData.quantity === 0
    ) {
      setIsError(true)
      return
    }
    submitData(formData)
    setAddImage(true)
    console.log(formData)
  }

  const handleAddImage = async (e) => {
    e.preventDefault()
    const saveImageUrlToFirestore = async () => {
      const userDocRef = doc(db, 'products', productId)
      try {
        await setDoc(
          userDocRef,
          { profileImageUrl: downloadURL },
          { merge: true }
        )
        navigate(0)
      } catch (error) {
        console.error('Error saving image URL to Firestore:', error)
        return
      }
    }
    saveImageUrlToFirestore()
  }
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)
      // Upload the file to Firebase Storage

      const storageRef = ref(storage, `images/${selectedFile.name}`)
      try {
        await uploadBytes(storageRef, selectedFile)
        const downloadedURL = await getDownloadURL(storageRef)
        setDownloadUrl(downloadedURL)
        // setDownloadedUrl(downloadURL)
        console.log('File available at', downloadedURL)
        // Optionally, you can set the download URL to state if needed
        // setImageUrl(downloadURL)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }
  //
  return (
    <>
      {!addImage ? (
        <section className="mt-20 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[450px]"
            onClick={() => setIsError(false)}
          >
            <div className="form-container">
              <label htmlFor="name">Name of Products</label>
              <input
                type="text"
                id="name"
                placeholder="Earrings"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-container">
              <label htmlFor="price">Price of Products</label>
              <input
                type="text"
                id="price"
                placeholder="price is in dollars ($)"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
            <div className="form-container">
              <label htmlFor="category">Category of Products</label>
              <input
                type="text"
                placeholder="Earrings"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>

            <div className="form-container">
              <label htmlFor="quantity">Quantity Available</label>
              <input
                type="number"
                placeholder="5 is the maximum"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </div>
            {isError && (
              <p className="text-center text-red-500">
                Please all fields are required
              </p>
            )}
            <button
              type="submit"
              className="text-center w-full mt-4 border bg-[#D19A64] rounded-xl p-3 text-white"
            >
              Add to Store
            </button>
          </form>
        </section>
      ) : (
        <section className="mt-20 flex justify-center items-center">
          <form onSubmit={handleAddImage}>
            <div className="form-container">
              <label htmlFor="image">Product Image</label>
              <input type="file" id="image" onChange={handleFileChange} />
              <button
                type="submit"
                className="text-center w-full mt-4 border bg-[#D19A64] rounded-xl p-3 text-white"
              >
                Add Product Image
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default Manager
