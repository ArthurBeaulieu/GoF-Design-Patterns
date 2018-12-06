package gof;

public class MainFlyweight {

	public static void main(String[] args) {
		ConstructionFactory factory = ConstructionFactory.getInstance();
		
		Construction m1 = factory.getConstruction(Type.MAISON);
		Construction m2 = factory.getConstruction(Type.MAISON);
		
		System.out.println(m1==m2);

	}

}
