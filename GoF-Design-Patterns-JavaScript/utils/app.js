const buttons = {
	chainOfResponsibility: document.getElementById('js-button-1'), // Behavioral Patterns
	command: document.getElementById('js-button-2'),
	interpreter: document.getElementById('js-button-3'),
	iterator: document.getElementById('js-button-4'),
	mediator: document.getElementById('js-button-5'),
	memento: document.getElementById('js-button-6'),
	observer: document.getElementById('js-button-7'),
	state: document.getElementById('js-button-8'),
	strategy: document.getElementById('js-button-9'),
	template: document.getElementById('js-button-10'),
	visitor: document.getElementById('js-button-11'),
	abstractFactory: document.getElementById('js-button-12'), // Creational Patterns
	builder: document.getElementById('js-button-13'),
	factory: document.getElementById('js-button-14'),
	prototype: document.getElementById('js-button-15'),
	singleton: document.getElementById('js-button-16'),
	adapter: document.getElementById('js-button-17'), // Structural Patterns
	bridge: document.getElementById('js-button-18'),
	composite: document.getElementById('js-button-19'),
	decorator: document.getElementById('js-button-20'),
	facade: document.getElementById('js-button-21'),
	flyweight: document.getElementById('js-button-22'),
	proxy: document.getElementById('js-button-23')
};

// Behavioral Patterns events
buttons.chainOfResponsibility.addEventListener('click', testChainOfResponsibility, false);
buttons.command.addEventListener('click', testCommand, false);
buttons.interpreter.addEventListener('click', testInterpreter, false);
buttons.iterator.addEventListener('click', testIterator, false);
buttons.mediator.addEventListener('click', testMediator, false);
buttons.memento.addEventListener('click', testMemento, false);
buttons.observer.addEventListener('click', testObserver, false);
buttons.state.addEventListener('click', testState, false);
buttons.strategy.addEventListener('click', testStrategy, false);
buttons.template.addEventListener('click', testTemplate, false);
buttons.visitor.addEventListener('click', testVisitor, false);
// Creational Patterns events
buttons.abstractFactory.addEventListener('click', testAbstractFactory, false);
buttons.builder.addEventListener('click', testBuilder, false);
buttons.factory.addEventListener('click', testFactory, false);
buttons.prototype.addEventListener('click', testPrototype, false);
buttons.singleton.addEventListener('click', testSingleton, false);
// Structural Patterns events
buttons.adapter.addEventListener('click', testAdapter, false);
buttons.bridge.addEventListener('click', testBridge, false);
buttons.composite.addEventListener('click', testComposite, false);
buttons.decorator.addEventListener('click', testDecorator, false);
buttons.facade.addEventListener('click', testFacade, false);
buttons.flyweight.addEventListener('click', testFlyweight, false);
buttons.proxy.addEventListener('click', testProxy, false);