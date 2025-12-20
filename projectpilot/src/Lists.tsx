function FruitListItem(props: any) {
  function handleClick(e: any, id: number) {
    console.log(`removed ${id} ${e} `);
  }

  return (
  <li onClick={(e) => handleClick(e, props.fruit.id)}>
      {props.fruit.name}
  </li>);
}

/* 
function FruitList(props: any) {
  return (
    <ul>
      {props.fruits.map((fruit: any) => (
        <FruitListItem key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
}
*/

function FruitList(props: any) {
  const fruitListItems = props.fruits.map((fruit: any) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}

export default FruitList