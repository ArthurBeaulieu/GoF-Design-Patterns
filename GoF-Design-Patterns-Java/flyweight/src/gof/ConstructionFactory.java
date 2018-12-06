package gof;

import java.util.HashMap;
import java.util.Map;

public class ConstructionFactory {
	private static ConstructionFactory instance;
	private Map<Type, Construction> map = new HashMap<>();
	
	static {
		instance = new ConstructionFactory();
	}
	
	public static ConstructionFactory getInstance() {
		return instance;
	}
	
	public Construction getConstruction(Type type) {
		Construction c = map.get(type);
		if(c==null) {
			switch (type) {
			case MAISON:
				c= new Maison("maison");
				break;
			case HOTEL:
				c= new Hotel("hotel");
				break;
			}
			map.put(type, c);
		}
		return c;
	}
	private ConstructionFactory() {
	}

}
