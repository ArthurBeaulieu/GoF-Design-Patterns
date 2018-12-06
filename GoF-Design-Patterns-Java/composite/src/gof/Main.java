package gof;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Window window = new Window();
		window.add(new Pixel());
		window.add(new Image());
		window.add(new Image());
		window.show();

	}

}
