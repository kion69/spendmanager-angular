import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Component, Type } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {

  viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  createInstance<T>(component: Type<T>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(component);
    const componentRef = this.viewContainerRef.createComponent(componentFactory) as any;
    componentRef.instance.reference = componentRef;
  }
}
