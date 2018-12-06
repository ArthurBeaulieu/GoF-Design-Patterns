const fillExplanation = (options) => {
	console.clear();
	const titleField = document.getElementById('js-pattern-title');
	const textField = document.getElementById('js-pattern-explanation');

	titleField.innerHTML = options.title;
	textField.innerHTML = options.message;
};

// Behavioral Patterns tests
const testChainOfResponsibility = () => {
	fillExplanation({
		title: 'Chain Of Responsibility Pattern',
		message: 'The chain of responsibility pattern is a <b><em>Behavioral Pattern</em></b>, that delegates commands to a chain of processing objects.'
	});

	console.log('---  %cChain Of Responsibility pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	console.log('Error with a severity of n will always trigger logger that has a severity greater or equal to n.');	
	var log1 = new LoggerError_ES5(1);
	var log2 = new LoggerWarning_ES5(2);
	var log3 = new LoggerInfo_ES5(3);
	log2.setNext(log3);
	log1.setNext(log2);
	log1.log(2);

	console.log('---  %cChain Of Responsibility pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	console.log('Error with a severity of n will always trigger logger that has a severity greater or equal to n.');
	const log4 = new LoggerError_ES6(1);
	const log5 = new LoggerWarning_ES6(2);
	const log6 = new LoggerInfo_ES6(3);
	log5.setNext(log6);
	log4.setNext(log5);
	log4.log(1);
};

const testCommand = () => {
	fillExplanation({
		title: 'Command Pattern',
		message: 'The command pattern is a <b><em>Behavioral Pattern</em></b>, that creates objects which encapsulate actions and parameters.'
	});

	console.log('---  %cCommand pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	console.log('The command invoker will start and stop the engine now.');	
	var engine1 = new Engine_ES5();
	var commandOn1 = new OnCommand_ES5(engine1);
	var commandOff1 = new OffCommand_ES5(engine1);
	var startEngineCommand1 = new CockpitCommand_ES5(commandOn1);
	var stopEngineCommand1 = new CockpitCommand_ES5(commandOff1);

	startEngineCommand1.execute();
	stopEngineCommand1.execute();

	console.log('---  %cCommand pattern %c(ES6)', 'font-weight:bold;', 'color:red;');	
	console.log('The command invoker will start and stop the engine now.');
	const engine2 = new Engine_ES6();
	const commandOn2 = new OnCommand_ES6(engine2);
	const commandOff2 = new OffCommand_ES6(engine2);
	const startEngineCommand2 = new CockpitCommand_ES6(commandOn2);
	const stopEngineCommand2 = new CockpitCommand_ES6(commandOff2);

	startEngineCommand2.execute();
	stopEngineCommand2.execute();
};

const testInterpreter = () => {
	fillExplanation({
		title: 'Interpreter Pattern',
		message: 'The interpreter pattern is a <b><em>Behavioral Pattern</em></b>, that implements a specialized language.'
	});

	console.log('---  %cInterpreter pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	console.log('Initializing two numbers, 64 and 3.');
	var num1 = new Num_ES5(64);
	var num2 = new Num_ES5(3);
	var addition1 = new Sum_ES5(num1, num2);
	var substraction1 = new Substract_ES5(num1, num2);
	console.log('Addition: ', addition1.interpret(), 'Substraction: ', substraction1.interpret());

	console.log('---  %cInterpreter pattern %c(ES6)', 'font-weight:bold;', 'color:red;');	
	console.log('Initializing two numbers, 42 and 16.');
	const num3 = new Num_ES6(42);
	const num4 = new Num_ES6(16);
	const addition2 = new Sum_ES6(num3, num4);
	const substraction2 = new Substract_ES6(num3, num4);
	console.log('Addition: ', addition2.interpret(), 'Substraction: ', substraction2.interpret());
};

const testIterator = () => {
	fillExplanation({
		title: 'Iterator Pattern',
		message: 'The iterator pattern is a <b><em>Behavioral Pattern</em></b>, that accesses the elements of an object sequentially without exposing its underlying representation.'
	});

	var list = ['banane', 'orange'];
	console.log('---  %cIterator pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	var iterator1 = new Iterator_ES5(list);
	console.log('Iterating over the following list :', list);
	while (iterator1.hasNext()) {
		console.log('Index ' + iterator1.getIndex() + ', value', iterator1.current());
		iterator1.next();
	}	
	console.log('No further elements to parse.')

	console.log('---  %cIterator pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const iterator2 = new Iterator_ES6(list);
	console.log('Iterating over the following list :', list);
	while (iterator2.hasNext()) {
	  console.log('Item ' + iterator2.index + ', value', iterator2.current());
	  iterator2.next();
	}
	console.log('No further elements to parse.')
};

const testMediator = () => {
	fillExplanation({
		title: 'Mediator Pattern',
		message: 'The mediator pattern is a <b><em>Behavioral Pattern</em></b>, that allows loose coupling between classes by being the only class that has detailed knowledge of their methods.'
	});

	console.log('---  %cMediator pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var trafficTower1 = new TrafficTower_ES5();
	var airplane1 = new Airplane_ES5('E|ES', trafficTower1);
	var airplane2 = new Airplane_ES5('W', trafficTower1);
	console.log('Request position from airplane1:', airplane1.requestPositions(), ' and for airplane2:', airplane2.requestPositions());

	console.log('---  %cMediator pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const trafficTower2 = new TrafficTower_ES6();
	const airplane3 = new Airplane_ES6('N|NE', trafficTower2);
	const airplane4 = new Airplane_ES6('S|SW', trafficTower2);
	console.log('Request position from airplane4:', airplane4.requestPositions(), ' and for airplane3:', airplane3.requestPositions());
};

const testMemento = () => {
	fillExplanation({
		title: 'Memento Pattern',
		message: 'The memento pattern is a <b><em>Behavioral Pattern</em></b>, that provides the ability to restore an object to its previous state (undo).'
	});

	console.log('---  %cMemento pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var caretaker1 = new Caretaker_ES5();
	var memento1 = Originator_ES5.store('Hellow');
	var memento2 = Originator_ES5.store('Worldz!');
	caretaker1.addMemento(memento1);
	caretaker1.addMemento(memento2);
	console.log('Memento of index 0:', Originator_ES5.restore(caretaker1.getMemento(0)), ', Memento of index 1:', Originator_ES5.restore(caretaker1.getMemento(1)));

	console.log('---  %cMemento pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const caretaker2 = new Caretaker_ES6();
	const memento3 = Originator_ES6.store(42);
	const memento4 = Originator_ES6.store(149);
	caretaker2.addMemento(memento3);
	caretaker2.addMemento(memento4);
	console.log('Memento of index 0:', Originator_ES6.restore(caretaker2.getMemento(0)), ', Memento of index 1:', Originator_ES6.restore(caretaker2.getMemento(1)));
};

const testObserver = () => {
	fillExplanation({
		title: 'Observer Pattern',
		message: 'The observer pattern is a <b><em>Behavioral Pattern</em></b>, that is a publish/subscribe pattern which allows a number of observer objects to see an event.'
	});

  console.log('---  %cObserver pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
  var counter1 = 0;
  var observer1 = new Observer_ES5();
  var token1 = observer1.subscribe({
    event: 'customEvent'
  }, function() {
    console.log('es5 customEvent fired', ++counter1);
    if (counter1 === 5) {
      observer1.unsubscribe(token1);

		  console.log('---  %cObserver pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
		  let counter2 = 0;
		  const observer2 = new Observer();
		  const token2 = observer2.subscribe({
		    event: 'customEvent'
		  }, () => {
		    console.log('es6 customEvent fired', ++counter2);
		    if (counter2 === 5) {
		      observer2.unsubscribe(token2);
		    }
		  });

		  console.log('Firing 5 times the es6 customEvent, then unsubscribe from the observer.');
		  setInterval(function() {
		    observer2.fire('customEvent');    
		  }, 50);		  
    }
  });

  console.log('Firing 5 times the es5 customEvent, then unsubscribe from the observer.');
  setInterval(function() {
    observer1.fire('customEvent');     
  }, 50);
};

const testState = () => {
	fillExplanation({
		title: 'State Pattern',
		message: 'The state pattern is a <b><em>Behavioral Pattern</em></b>, that allows an object to alter its behavior when its internal state changes.'
	});

	console.log('---  %cState pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	var photoBooth1 = new PhotoBoothStatus_ES5();
	photoBooth1.nextState();
	photoBooth1.nextState();
	photoBooth1.nextState();

	console.log('---  %cState pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const photoBooth2 = new PhotoBooth_ES6();
	photoBooth2.state.insertCoins(5);
	photoBooth2.state.selectFrame(4);	
	photoBooth2.state.takePicture();	
};

const testStrategy = () => {
	fillExplanation({
		title: 'Strategy Pattern',
		message: 'The strategy pattern is a <b><em>Behavioral Pattern</em></b>, that allows one of a family of algorithms to be selected on-the-fly at runtime.'
	});

	console.log('---  %cStrategy pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var guestCart1 = new ShoppingCart_ES5(GuestStrategy_ES5);
	var regularCart1 = new ShoppingCart_ES5(RegularStrategy_ES5);
	var premiumCart1 = new ShoppingCart_ES5(PremiumStrategy_ES5);
	guestCart1.setAmount(665);
	regularCart1.setAmount(665);
	premiumCart1.setAmount(665);
	console.log('Original price: 665 $', '\nGuest cehckout:', guestCart1.checkout(), '\nRegular cehckout:', regularCart1.checkout(), '\nPremium cehckout:', premiumCart1.checkout());

	console.log('---  %cStrategy pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const guestCart2 = new ShoppingCart_ES6(GuestStrategy_ES6);
	const regularCart2 = new ShoppingCart_ES6(RegularStrategy_ES6);
	const premiumCart2 = new ShoppingCart_ES6(PremiumStrategy_ES6);
	guestCart2.setAmount(150);
	regularCart2.setAmount(150);
	premiumCart2.setAmount(150);
	console.log('Original price: 150 $', '\nGuest cehckout:', guestCart2.checkout(), '\nRegular cehckout:', regularCart2.checkout(), '\nPremium cehckout:', premiumCart2.checkout());
};

const testTemplate = () => {
	fillExplanation({
		title: 'Template Pattern',
		message: 'The template pattern is a <b><em>Behavioral Pattern</em></b>, that defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.'
	});

	console.log('---  %cTemplate pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var tax1 = new Tax1_ES5();
	var tax2 = new Tax2_ES5();
	console.log('Original tax 1 price: 4096', 'Real tax 1 price', tax1.calc(4096));
	console.log('Original tax 2 price: 4096', 'Real tax 2 price', tax2.calc(4096));

	console.log('---  %cTemplate pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const tax3 = new Tax1_ES6();
	const tax4 = new Tax2_ES6();
	console.log('Original tax 3 price: 1080', 'Real tax 3 price', tax3.calc(1080));
	console.log('Original tax 4 price: 1080', 'Real tax 4 price', tax4.calc(1080));
};

const testVisitor = () => {
	fillExplanation({
		title: 'Visitor Pattern',
		message: 'The visitor pattern is a <b><em>Behavioral Pattern</em></b>, that separates an algorithm from an object structure by moving the hierarchy of methods into one object.'
	});

	console.log('---  %cVisitor pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var manager1 = new Manager_ES5(14750);
	var developer1 = new Developer_ES5(1200);
	console.log('@Facebook:');
	console.log('Manager salary:', manager1.salary, 'Manager salary after raise:', manager1.accept(BonusVisitor_ES5));
	console.log('Developer salary:', developer1.salary, 'Developer salary after raise:', developer1.accept(BonusVisitor_ES5));

	console.log('---  %cVisitor pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const manager2 = new Manager_ES6(3200);
	const developer2 = new Developer_ES6(2750);
	console.log('In a wonderful world:');
	console.log('Manager salary:', manager2.salary, 'Manager salary after raise:', manager2.accept(BonusVisitor_ES6));
	console.log('Developer salary:', developer2.salary, 'Developer salary after raise:', developer2.accept(BonusVisitor_ES6));
};

// Creational Patterns tests
const testAbstractFactory = () => {
	fillExplanation({
		title: 'Abstract Factory Pattern',
		message: 'The abstract factory pattern is a <b><em>Creational Pattern</em></b>, that provide an interface for creating families of related or dependent objects without specifying their concrete classes.'
	});

	console.log('---  %cAbstract Factory pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	var computer1 = ComputerRetailler_ES5('lenovo');
	var computer2 = ComputerRetailler_ES5('dell');
	console.log('The two following objects have been instanciated from the same abstract factory.');			
	console.log((new computer1()).info());
	console.log((new computer2()).info());

	console.log('---  %cAbstract Factory pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const computer3 = ComputerRetailler_ES6('lenovo');
	const computer4 = ComputerRetailler_ES6('dell');
	console.log('The two following objects have been instanciated from the same abstract factory.');				
	console.log((new computer3()).info());
	console.log((new computer4()).info());	
};

const testBuilder = () => {
	fillExplanation({
		title: 'Builder Pattern',
		message: 'The builder pattern is a <b><em>Creational Pattern</em></b>, that separate the construction of a complex object from its representation, allowing the same construction process to create various representations.'
	});

	console.log('---  %cBuilder pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var request1 = new RequestBuilder_ES5();
	request1.forUrl('https://manazeak.org/').useMethod('HEAD').payload({
		username: 'messmaker',
		duration: '1 days'
	});
	console.log('The following request was built using the es5 RequestBuilder', request1.request);

	console.log('---  %cBuilder pattern %c(ES6)', 'font-weight:bold;', 'color:red;');	
	const request2 = new RequestBuilder_ES6();
	request2.forUrl('https://manazeak.github.io/').useMethod('POST').payload({
		token: '127001',
		duration: '3 days'
	});
	console.log('The following request was built using the es6 RequestBuilder', request2.request);
};

const testFactory = () => {
	fillExplanation({
		title: 'Factory Pattern',
		message: 'The factory pattern is a <b><em>Creational Pattern</em></b>, that define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.'
	});

	console.log('---  %cFactory pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	console.log('The three following objects have been instanciated from the same factory.');	
	console.log(new Factory_ES5('motherboard'));
	console.log(new Factory_ES5('gpu'));
	console.log(new Factory_ES5('4kscreen'));

	console.log('---  %cFactory pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const factory = new Factory_ES6('motherboard');
	console.log('The three following objects have been instanciated from the same factory.');		
	console.log(factory.create('motherboard'));
	console.log(factory.create('gpu'));
	console.log(factory.create('4kscreen'));	
};

const testPrototype = () => {
	fillExplanation({
		title: 'Prototype Pattern',
		message: 'The prototype pattern is a <b><em>Creational Pattern</em></b>, that specify the kinds of objects to create using a prototypical instance, and create new objects from the \'skeleton\' of an existing object, thus boosting performance and keeping memory footprints to a minimum.'
	});

	console.log('---  %cPrototype pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var sheep1 = new Sheep_ES5('Josette', 7500);
	console.log('Original sheep: ', sheep1, 'Cloned sheep: ', sheep1.clone());

	console.log('---  %cPrototype pattern %c(ES6)', 'font-weight:bold;', 'color:red;');	
	const sheep2 = new Sheep_ES6('Babette', 150);
	console.log('Original sheep: ', sheep2, 'Cloned sheep: ', sheep2.clone());
};

const testSingleton = () => {
	fillExplanation({
		title: 'Singleton Pattern',
		message: 'The singleton pattern is a <b><em>Creational Pattern</em></b>, that ensure that a class has only one instance, and provide a global point of access to it.'
	});

	console.log('---  %cSingleton pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	var instance1 = new Singleton_ES5();
	var instance2 = new Singleton_ES5();
	console.log("Is", instance1, " equal to", instance2, " : " + (instance1 === instance2));

	console.log('---  %cSingleton pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const instance3 = new Singleton_ES6();
	const instance4 = new Singleton_ES6();
	console.log("Is", instance3, " equal to", instance4, " : " + (instance3 === instance4));
};

// Structural Patterns tests
const testAdapter = () => {
	fillExplanation({
		title: 'Adapter Pattern',
		message: 'The adapter pattern is a <b><em>Structural Pattern</em></b>, that allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.'
	});

	console.log('---  %cAdapter pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	console.log('Creating a level 200 soldier and a level 2 jedi.');	
	var solider1 = new Soldier_ES5(200);
	var jedi1 = new Jedi_ES5(2);
	var jediAdapter1 = new JediAdapter_ES5(jedi1);
	console.log('Adapted jedi to soldier attack value:', jediAdapter1.attack(), 'Soldier attack value:', solider1.attack());
	console.log('Jedi was slained by a random soldier. What a shame, Mr. Windu.');

	console.log('---  %cAdapter pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	console.log('Creating a level 50 soldier and a level 1 jedi.');	
	const solider2 = new Soldier_ES6(50);
	const jedi2 = new Jedi_ES6(1);
	const jediAdapter2 = new JediAdapter_ES6(jedi2);
	console.log('Adapted jedi to soldier attack value:', jediAdapter2.attack(), 'Soldier attack value:', solider2.attack());
	console.log('Draw game.');
};

const testBridge = () => {
	fillExplanation({
		title: 'Bridge Pattern',
		message: 'The bridge pattern is a <b><em>Structural Pattern</em></b>, that decouples an abstraction from its implementation so that the two can vary independently.'
	});

	console.log('---  %cBridge pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	var epson1 = new EpsonPrinter_ES5(AlcoholInk_ES5());
	var hp1 = new EpsonPrinter_ES5(AcrylicInk_ES5());
	console.log('Epson printer:', epson1.print(), epson1, '\nHp printer:', hp1.print(), hp1);

	console.log('---  %cBridge pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const acrylicInk1 = new AcrylicInk_ES6();
	const alcoholInk1 = new AlcoholInk_ES6();
	const epson2 = new EpsonPrinter_ES6(acrylicInk1);
	const hp2 = new EpsonPrinter_ES6(alcoholInk1);
	console.log('Epson printer:', epson2.print(), epson2, '\nHp printer:', hp2.print(), hp2);
};

const testComposite = () => {
	fillExplanation({
		title: 'Composite Pattern',
		message: 'The composite pattern is a <b><em>Structural Pattern</em></b>, that composes zero-or-more similar objects so that they can be manipulated as one object.'
	});

	console.log('---  %cComposite pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	console.log('Creating 1 body, 3 div and 2 img.');
	var body1 = new BodyComponent_ES6();
	var div1 = new DivComponent_ES6();
	var div2 = new DivComponent_ES6();
	var div3 = new DivComponent_ES6();
	var img1 = new ImgComponent_ES6();
	var img2 = new ImgComponent_ES6();
	console.log('Attaching img2 to div3');
	div3.add(img2);
	console.log('Attaching img1 to div2');
	div2.add(img1);
	console.log('Attaching div3 to div2');
	div2.add(div3);
	console.log('Attaching div2 to div1');
	div1.add(div2);
	console.log('Attaching div1 to body1');
	body1.add(div1);
	console.log('Check the children hierrarchy now', body1);

	console.log('---  %cComposite pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	console.log('Creating 1 body, 3 div and 2 img.');	
	const body2 = new BodyComponent_ES6();
	const div4 = new DivComponent_ES6();
	const div5 = new DivComponent_ES6();
	const div6 = new DivComponent_ES6();
	const img3 = new ImgComponent_ES6();
	const img4 = new ImgComponent_ES6();
	console.log('Attaching img4 to div6');	
	div6.add(img4);
	console.log('Attaching img3 to div5');	
	div5.add(img3);
	console.log('Attaching div6 to div5');	
	div5.add(div6);
	console.log('Attaching div5 to div4');	
	div4.add(div5);
	console.log('Attaching div4 to body2');	
	body2.add(div4);		
	console.log('Check the children hierrarchy now', body2);
};

const testDecorator = () => {
	fillExplanation({
		title: 'Decorator Pattern',
		message: 'The decorator pattern is a <b><em>Structural Pattern</em></b>, that dynamically adds/overrides behaviour in an existing method of an object.'
	});

	console.log('---  %cDecorator pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	var sweat1 = new Sweat_ES5();
	var decorator1 = new ChocolateDecorator_ES5(sweat1);
	var decorator2 = new OrangeDecorator_ES5(sweat1);
	console.log('The two following objects inherit from the Sweat class (Bonbon). The flavour is the decoration.');
	console.log(decorator1.getFlavor());
	console.log(decorator2.getFlavor());

	console.log('---  %cDecorator pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const sweat2 = new Sweat_ES6();
	const decorator3 = new ChocolateDecorator_ES6(sweat2);
	const decorator4 = new OrangeDecorator_ES6(sweat2);
	console.log('The two following objects inherit from the Sweat class (Bonbon). The flavour is the decoration.');	
	console.log(decorator3.getFlavor());
	console.log(decorator4.getFlavor());
};

const testFacade = () => {
	fillExplanation({
		title: 'Facade Pattern',
		message: 'The facade pattern is a <b><em>Structural Pattern</em></b>, that provides a simplified interface to a large body of code.'
	});

	console.log('---  %cFacade pattern %c(ES5)', 'font-weight:bold;', 'color:green;');	
	console.log('Computing total price of the order for 420 $:\n', Math.round(ShopFacade_ES5.calc(420)) + '$', '(sum of shopping, fees and discount).');	

	console.log('---  %cFacade pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const shopFacade2 = new ShopFacade_ES6();
	console.log('Computing total price of the order for 50 $:\n', Math.round(shopFacade2.calc(50)) + '$', '(sum of shopping, fees and discount).');
};

const testFlyweight = () => {
	fillExplanation({
		title: 'Flyweight Pattern',
		message: 'The flyweight pattern is a <b><em>Structural Pattern</em></b>, that reduces the cost of creating and manipulating a large number of similar objects.'
	});

	console.log('---  %cFlyweight pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	console.log('The three following objects have created in the flyweight pattern hashmap.');	
	ColorFactory_ES5.create('red');
	ColorFactory_ES5.create('green');
	ColorFactory_ES5.create('blue');
	ColorFactory_ES5.display();	


	console.log('---  %cFlyweight pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	const colorFactory = new ColorFactory_ES6();
	console.log('The three following objects have created in the flyweight pattern hashmap.');			
	colorFactory.create('red');
	colorFactory.create('green');
	colorFactory.create('blue');
	colorFactory.display();
};

const testProxy = () => {
	fillExplanation({
		title: 'Proxy Pattern',
		message: 'The proxy pattern is a <b><em>Structural Pattern</em></b>, that provides a placeholder for another object to control access, reduce cost, and reduce complexity.'
	});

	console.log('---  %cProxy pattern %c(ES5)', 'font-weight:bold;', 'color:green;');
	console.log('Testing driver Bob, which is 16 yo.');	
	const driver1 = new Driver_ES5(16);
	const proxy1 = new CarProxy_ES5(driver1);
	console.log(proxy1.drive(), proxy1.driver);

	console.log('---  %cProxy pattern %c(ES6)', 'font-weight:bold;', 'color:red;');
	console.log('Testing driver Alice, which is 18 yo.');
	const driver2 = new Driver_ES6(18);
	const proxy2 = new CarProxy_ES6(driver2);
	console.log(proxy2.drive(), proxy2.driver);
};
