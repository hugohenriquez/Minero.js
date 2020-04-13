import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ClienteService } from '../shared/servicio/cliente.service';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface FoodNode {
  name: string ;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '2020',
    children: [
      {name: 'minero-01'},
      {name: 'minero-02'},
      {name: 'minero-03'},
    ]
  }, {
    name: '2019',
    children: [
      {
        name: 'chuquicamata',
        children: [
          {name: 'minero-01'},
          {name: 'minero-01'},
        ]
      }, {
        name: 'pelambre',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
  {
    name: '2022',
    children: [
      {name: 'minero-01'},
      {name: 'minero-02'},
      {name: 'minero-03'},
    ]
  },
  {
    name: '2023',
    children: [
      {name: 'minero-01'},
      {name: 'minero-02'},
      {name: 'minero-03'},
    ]
  },
  {
    name: '2024',
    children: [
      {name: 'minero-01'},
      {name: 'minero-02'},
      {name: 'minero-03'},
    ]
  }
];




@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent  {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(  ) {
    this.dataSource.data = TREE_DATA;
  }


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}


