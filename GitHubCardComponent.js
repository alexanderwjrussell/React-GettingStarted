const Card = (props) => {
	return (
  	<div>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>
          {props.company}
        </div>
      </div>
    </div>
  );
};

let data = [
	{ name: "Alexander Russell",	avatar_url:"https://avatars2.githubusercontent.com/u/18336947?v=4",
    company: "Compare the Market"  
  },
  	{ name: "Sharon Russell",	avatar_url:"https://avatars0.githubusercontent.com/u/13449569?v=4",
    company: "Compare the Market"  
  }
];

const CardList = (props) => {
	return (
  	<div>
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

ReactDOM.render(<CardList cards={data}/>, mountNode);