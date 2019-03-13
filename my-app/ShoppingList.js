//testing out the React.Component subclass

//a component takes in parameters and returns a hierarchy of views
//to display via the render method

class ShoppingList extends React.Component
{
	//returns a description of what you want to see on the screen
	render()
	{
		return
		(
			//at build time the <div> syntax is converted to 
			//React.createElement('div')
			<div className="shopping-list">
			<h1>Shoping List for {this.props.name}</h1>
			<ul>
				<li>Instagram</li>
				<li>WhatsApp</li>
				<li>Ocolus</li>
			</ul>
			</div>
		);
	}
}
//Example usage: <ShoppingList name="Sredna"/>