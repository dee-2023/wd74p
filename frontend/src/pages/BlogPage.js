import React from 'react';
import BlogPost from './BlogPost';


const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Getting Started with React',
      author: 'John Doe',
      date: 'Thursday October 1st, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed nec dolor nec dolor bibendum feugiat. Sed consectetur hendrerit justo, a ultrices metus interdum nec. Suspendisse potenti. Sed euismod vitae odio vel mattis. Proin auctor metus non ex finibus, eget fermentum metus ultricies. Pellentesque dapibus libero vel risus ultrices, eget varius felis varius. Integer dapibus, elit at fermentum elementum, ligula mi consectetur justo, quis tincidunt orci quam a eros. Praesent vel varius odio. Integer bibendum laoreet arcu at ultricies. Sed id egestas justo. Fusce non orci a arcu feugiat posuere nec at mauris. Sed semper, mi a tristique eleifend, ipsum leo dictum dui, non faucibus justo risus eu lectus. Fusce et arcu non libero tincidunt interdum. Nunc elementum urna nec velit fringilla, eu varius quam blandit. Proin vulputate orci eget erat vulputate, eu semper libero cursus. In eget laoreet arcu. Nam gravida auctor tortor vel tristique. Ut fermentum sem nec elit vestibulum, quis bibendum leo aliquet. Proin ac urna id augue dignissim vulputate. Maecenas vel imperdiet nunc. Etiam fermentum nec tortor non feugiat. Sed lacinia fringilla sem, in condimentum justo luctus vel. Aenean non luctus turpis. Vivamus bibendum laoreet interdum. Ut euismod congue massa, a euismod ante ullamcorper a. In viverra justo in massa ullamcorper, nec fermentum erat venenatis. Quisque non dolor ut quam congue vehicula. Pellentesque malesuada nunc ut ante facilisis, ac euismod ante pulvinar. Nullam hendrerit tortor quis nulla scelerisque, ut pharetra ligula sollicitudin. Fusce a ligula et ligula tincidunt efficitur. Etiam elementum leo eget ex eleifend convallis. Nam varius scelerisque volutpat. Vivamus in nisl justo. Vestibulum facilisis, ligula a dignissim consectetur, dolor justo congue justo, nec varius dolor elit eget purus. Vestibulum eu malesuada sapien, eu tempus lectus. Donec vehicula, neque eget tincidunt sagittis, odio erat dignissim felis, a euismod metus sapien quis metus. Nullam feugiat congue aliquet. Sed mollis purus non scelerisque scelerisque. Duis id ullamcorper arcu. Sed feugiat sapien eget tortor tincidunt, nec convallis tellus elementum. Ut in felis id enim aliquam elementum id a arcu. Donec lacinia, est a ultrices luctus, metus eros malesuada sapien, vel aliquet odio quam eu velit.',
      imageUrl: '/blogimg/beach.png',
    },
    {
      title: 'State Management in React Applications',
      author: 'Jane Smith',
      date: 'Thursday October 1st, 2020',
      content: 'Managing state in a React app is crucial for building...',
      imageUrl: '/blogimg/elnidohead.png',
    },
    {
        title: 'What exactly is a travel bubble?',
        author: 'JK Rowling',
        date: 'Thursday October 1st, 2020',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed nec dolor nec dolor bibendum feugiat. Sed consectetur hendrerit justo, a ultrices metus interdum nec. Suspendisse potenti. Sed euismod vitae odio vel mattis. Proin auctor metus non ex finibus, eget fermentum metus ultricies. Pellentesque dapibus libero vel risus ultrices, eget varius felis varius. Integer dapibus, elit at fermentum elementum, ligula mi consectetur justo, quis tincidunt orci quam a eros. Praesent vel varius odio. Integer bibendum laoreet arcu at ultricies. Sed id egestas justo. Fusce non orci a arcu feugiat posuere nec at mauris. Sed semper, mi a tristique eleifend, ipsum leo dictum dui, non faucibus justo risus eu lectus. Fusce et arcu non libero tincidunt interdum. Nunc elementum urna nec velit fringilla, eu varius quam blandit. Proin vulputate orci eget erat vulputate, eu semper libero cursus. In eget laoreet arcu. Nam gravida auctor tortor vel tristique. Ut fermentum sem nec elit vestibulum, quis bibendum leo aliquet. Proin ac urna id augue dignissim vulputate. Maecenas vel imperdiet nunc. Etiam fermentum nec tortor non feugiat. Sed lacinia fringilla sem, in condimentum justo luctus vel. Aenean non luctus turpis. Vivamus bibendum laoreet interdum. Ut euismod congue massa, a euismod ante ullamcorper a. In viverra justo in massa ullamcorper, nec fermentum erat venenatis. Quisque non dolor ut quam congue vehicula. Pellentesque malesuada nunc ut ante facilisis, ac euismod ante pulvinar. Nullam hendrerit tortor quis nulla scelerisque, ut pharetra ligula sollicitudin. Fusce a ligula et ligula tincidunt efficitur. Etiam elementum leo eget ex eleifend convallis. Nam varius scelerisque volutpat. Vivamus in nisl justo. Vestibulum facilisis, ligula a dignissim consectetur, dolor justo congue justo, nec varius dolor elit eget purus. Vestibulum eu malesuada sapien, eu tempus lectus. Donec vehicula, neque eget tincidunt sagittis, odio erat dignissim felis, a euismod metus sapien quis metus. Nullam feugiat congue aliquet. Sed mollis purus non scelerisque scelerisque. Duis id ullamcorper arcu. Sed feugiat sapien eget tortor tincidunt, nec convallis tellus elementum. Ut in felis id enim aliquam elementum id a arcu. Donec lacinia, est a ultrices luctus, metus eros malesuada sapien, vel aliquet odio quam eu velit.',
        imageUrl: '/blogimg/hammock.png',
    },
    {
        title: 'Be GREEN Be Clean: Enhanced Care Program by Ayala Land, Inc.',
        author: 'Naruto Uzumaki',
        date: 'Thursday October 1st, 2020',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed nec dolor nec dolor bibendum feugiat. Sed consectetur hendrerit justo, a ultrices metus interdum nec. Suspendisse potenti. Sed euismod vitae odio vel mattis. Proin auctor metus non ex finibus, eget fermentum metus ultricies. Pellentesque dapibus libero vel risus ultrices, eget varius felis varius. Integer dapibus, elit at fermentum elementum, ligula mi consectetur justo, quis tincidunt orci quam a eros. Praesent vel varius odio. Integer bibendum laoreet arcu at ultricies. Sed id egestas justo. Fusce non orci a arcu feugiat posuere nec at mauris. Sed semper, mi a tristique eleifend, ipsum leo dictum dui, non faucibus justo risus eu lectus. Fusce et arcu non libero tincidunt interdum. Nunc elementum urna nec velit fringilla, eu varius quam blandit. Proin vulputate orci eget erat vulputate, eu semper libero cursus. In eget laoreet arcu. Nam gravida auctor tortor vel tristique. Ut fermentum sem nec elit vestibulum, quis bibendum leo aliquet. Proin ac urna id augue dignissim vulputate. Maecenas vel imperdiet nunc. Etiam fermentum nec tortor non feugiat. Sed lacinia fringilla sem, in condimentum justo luctus vel. Aenean non luctus turpis. Vivamus bibendum laoreet interdum. Ut euismod congue massa, a euismod ante ullamcorper a. In viverra justo in massa ullamcorper, nec fermentum erat venenatis. Quisque non dolor ut quam congue vehicula. Pellentesque malesuada nunc ut ante facilisis, ac euismod ante pulvinar. Nullam hendrerit tortor quis nulla scelerisque, ut pharetra ligula sollicitudin. Fusce a ligula et ligula tincidunt efficitur. Etiam elementum leo eget ex eleifend convallis. Nam varius scelerisque volutpat. Vivamus in nisl justo. Vestibulum facilisis, ligula a dignissim consectetur, dolor justo congue justo, nec varius dolor elit eget purus. Vestibulum eu malesuada sapien, eu tempus lectus. Donec vehicula, neque eget tincidunt sagittis, odio erat dignissim felis, a euismod metus sapien quis metus. Nullam feugiat congue aliquet. Sed mollis purus non scelerisque scelerisque. Duis id ullamcorper arcu. Sed feugiat sapien eget tortor tincidunt, nec convallis tellus elementum. Ut in felis id enim aliquam elementum id a arcu. Donec lacinia, est a ultrices luctus, metus eros malesuada sapien, vel aliquet odio quam eu velit.',
        imageUrl: '/blogimg/relax.jpg',
      }
  ];

  return (
    <div className='homebody'>
      <h1>My Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          imageUrl={post.imageUrl}
          content={post.content} 
        />
      )) } <hr />
    </div>
  );
};

export default BlogPage;