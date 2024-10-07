import './categories.styles.scss';

const App = () => {

  const categories =[
    {
      id:1,
      title: 'Hats',
      ImageUrl:'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id:2,
      title: 'Jackets',
      ImageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id:3,
      title: 'Sneakers',
      ImageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id:4,
      title: 'Womens',
      ImageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id:5,
      title: 'Mens',
      ImageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  
  return (
    <div className="categories-container"> 
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
    </div>
  );
};

export default App;
