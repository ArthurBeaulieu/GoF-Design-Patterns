#ifndef __COLLECTION_H__
#define __COLLECTION_H__
#include "Iterator.h"
template <typename T> class Collection{
public:
	typedef Iterator<T>* iterator;
	
	virtual void push(T element)=0;
	virtual Iterator<T> *getIterator()=0;

};
#endif