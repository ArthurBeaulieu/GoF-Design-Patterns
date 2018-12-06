package gof;

public class MainDecorator {
	public static void main(String[] args) {
		Bonbon b = new Orange(new Chocolat(new Chocolat(new Sucre())));
		System.out.println(b.getGout());
	}
}
