import Image from "next/image";
import "./Feature.css";

export default function Feature({
  item,
  activeCategory,
  order,
}: {
  item: {
    img: string;
    title: string;
    description: string;
    img_width: string;
    img_height: string;
  };
  activeCategory: string;
  order: number;
}) {
  return (
    <div
      className={`feature-category feature-order-${order} ${activeCategory === item.title ? "feature-tab-active" : ""}`}
    >
      <div className="feature-img-container">
        <Image
          id="test"
          alt="image"
          src={item.img}
          // sizes="100vw"
          style={{
            width: "100%",
            maxWidth: `${item.img_width}px`,
            // height: "auto",
            maxHeight: `${item.img_height}px`,
          }}
          width={Number(item.img_width)}
          height={Number(item.img_height)}
          className={`feature-img-${order}`}
        />

        <div className={`feature-background-rectangular br-order-${order}`}>
          <div className="feature-white-background-rectangular"></div>
        </div>
      </div>

      <div className="features-category-wrapper">
        <div className="features-category-info">
          <div className="features-category-title">{item.title}</div>

          <div className="features-category-description">
            {item.description}
          </div>

          <div className="features-category-more-info">More Info</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="feature-img-container">
    <div style={{
        // display: 'flex',
        // justifyContent: 'center',
        height: '500px',
        border: '1px solid red',
        position: 'relative'
        // width: '100%',
        // minWidth: '520px'
    }}>
        <Image
            id="test"
            alt="image"
            src={item.img}
            sizes="100vw"
            style={{
                width: '100%',
                maxWidth: `${item.img_width}px`,
                height: 'auto',
                maxHeight: `${item.img_height}px`
            }}
            width={Number(item.img_width)}
            height={Number(item.img_height)}
            className={`feature-img-${order}`}
        />
    </div>


    <div className="feature-background-rectangular">
        <div style={{
            backgroundColor: 'white',
            maxWidth: '150px',
            width: '80%',
            height: '170px',
            position: 'absolute',
            right: '0'
        }}></div>
    </div>

</div> */
}
