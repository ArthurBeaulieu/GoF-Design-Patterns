package gof;

public abstract class Widget {
	protected String name;
	
	public Widget(String name) {
		this.name = name;
	}
	
	public abstract void show();
}
