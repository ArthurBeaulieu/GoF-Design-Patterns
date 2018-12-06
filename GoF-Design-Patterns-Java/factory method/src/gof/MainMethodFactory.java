package gof;

public class MainMethodFactory {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		AbstractComputerFactory creator = new LaptopFactory();
		System.out.println(creator);

	}

}
