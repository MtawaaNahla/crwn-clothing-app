import Directory from './components/directory/directory.component';

const App = () => {

  const categories =[
    {
      id:1,
      title: 'Hats',
      ImageUrl:'https://fcdrycleaners.com/wp-content/uploads/2023/09/Do-Dry-Cleaners-Clean-Hats-A-Complete-Guide-To-Hat-Cleaning.jpg',
    },
    {
      id:2,
      title: 'Jackets',
      ImageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/best-denim-jackets-cnnu-1.jpg?c=16x9&q=h_833,w_1480,c_fill',
    },
    {
      id:3,
      title: 'Sneakers',
      ImageUrl: 'https://caval.fr/cdn/shop/collections/mega-menu-sneakers-category_5f9b5627-dcbf-4bb0-913a-a4d05dd0b542.jpg?v=1712147593',
    },
    {
      id:4,
      title: 'Womens',
      ImageUrl: 'https://assets.vogue.com/photos/64c2bbe1d9567128b71301f8/master/w_2560%2Cc_limit/NAP_HSCampaign_FinalRetouch_CrisFragkou_7.jpg',
    },
    {
      id:5,
      title: 'Mens',
      ImageUrl: 'https://cdn.shopify.com/s/files/1/0022/0620/3948/files/Le_style_casual_chic.jpg?v=1698246412',
    },
  ];
  
  return <Directory categories={categories} />;
};

export default App;
