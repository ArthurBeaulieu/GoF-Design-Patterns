package gof;


public class MainMemento {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Contact c = new Contact("toto", "12");
		Memento<Contact> memento = c.createMemento();
		c.setAge("30");
		System.out.println(c);
		c.setMemento(memento);
		System.out.println(c);

	}

}
