const data = [
  {
    id: 1,
    img: "./Assets/images/sportingLagos.jpg",
    name: "sporting lagos",
  },
  {
    id: 2,
    img: "./Assets/images/chateau.jpg",
    name: "chateau",
  },
  {
    id: 3,
    img: "./Assets/images/atco.jpg",
    name: "atco",
  },

  {
    id: 4,
    img: "./Assets/images/robethson.jpg",
    name: "robethson",
  },

  {
    id: 5,
    img: "./Assets/images/comerico.jpg",
    name: "comercio",
  },

  {
    id: 6,
    img: "./Assets/images/settle2.jpg",
    name: "settl.me",
  },
]

export default data;


/**
 * [
 *  {
 *    header: '',
 *    content: '',
 *    list: {
 *      item1: '',
 *      item2: '',
 *    }
 *  }
 * ]
 * 
 * content.map(data => (
 *  <div>
 *    <h3>{data.header}</h3>
 *    <p>{data.content}</p>
 *    {data.list && <ol>
 *      data.list.map(listItem => (
 *        <li>{listItem}</li>
 *      ))
 *    </ol>}
 *  </div>
 * ))
 */