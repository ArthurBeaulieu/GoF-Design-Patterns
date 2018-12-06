package gof;

public class Pixel extends Widget {
	public Pixel() {
		super("Pixel");
	}

	@Override
	public void show() {
		System.out.println(name);
		
	}
}
