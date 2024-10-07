import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const {ImageUrl , title } = category ;
    return (
        <div className="category-container">
        <div
         className='background-image' 
         style={{ backgroundImage: `url(${ImageUrl})`
        }} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p> shap Now</p>
        </div>
      </div>
    )
}
export default CategoryItem 