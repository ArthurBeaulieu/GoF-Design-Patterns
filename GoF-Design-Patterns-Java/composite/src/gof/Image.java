package gof;

public class Image extends Widget {
	public Image() {
		super("Image");
	}
	@Override
	public void show() {
		System.out.println(name);

	}

}
