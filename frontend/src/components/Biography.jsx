import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Fuga, cupiditate consequuntur doloribus dignissimos laboriosam nostrum. Ex reiciendis molestias beatae. Labore consequatur doloribus rerum neque sit culpa consequuntur expedita id obcaecati eligendi doloremque laborum dolores facilis architecto, amet qui placeat distinctio deleniti eveniet, iusto laudantium rem quaerat officia. Fugit veritatis eaque dolorem commodi distinctio tempore repellat pariatur deleniti quos, cupiditate possimus voluptatem animi tempora. Hic laborum reprehenderit, corporis optio mollitia iste voluptatum ipsa aspernatur, ipsam accusantium facere doloremque illo esse! Dolores, maiores? Fugit similique, voluptatem impedit fuga fugiat dicta ipsam saepe ab cupiditate, minima deserunt totam consequatur accusantium corrupti amet beatae.
          </p>
          
        
        </div>
      </div>
    </>
  );
};

export default Biography;
