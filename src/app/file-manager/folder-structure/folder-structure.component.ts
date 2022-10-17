import { Component, OnInit } from '@angular/core';
import { NodeModel } from '../models/node.model';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent implements OnInit {
  nodes:NodeModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  /* function that adds a node to the tree taking two types , file or folder*/
  addNode(type: 'file' | 'folder', item?: NodeModel) {
    let name = this.getNodeName(); // get the name chosen by the user
    if (!name) { //validation if the name is empty
      alert("Name is required. Cancelling the operation");
      return;
    }
    if (item) { // checks to see if a node exists therefore check if names exist
      let nodeNameExist = item.children?.find(f => f.name?.toLowerCase() == name?.toLowerCase());
      if (nodeNameExist) {
        alert("Name already exists. Cancelling the operation");
        return;
      }
    } else {
      let nodeNameExist = this.nodes.find(f => f.name?.toLowerCase() == name?.toLowerCase());
      if (nodeNameExist) {
        alert("Name already exists. Cancelling the operation");
        return;
      }
    }
    let node: NodeModel = new NodeModel();
    node.id = this.getUniqueId(2);
    node.type = type;
    node.name = name;
    node.children = [];

    if (item) {
      item.children?.push(node);
    } else {
      this.nodes.push(node);
    }
  }
  /* function that deletes a node with two types , whether it is a file or a folder */
  deleteNode(list:NodeModel[], index:number, type: 'folder' | 'file') {
    if(confirm(`Are you sure you want to delete this ${type}?`)) { //validation to confirm that user did not accidentally clicked delete
      list.splice(index, 1); // find the index and remove from array
    }
  }
  /* function that returns the name chosen by the user */
  getNodeName(folder?: boolean) {
    return prompt(`Please type the ${folder ? 'folder' : 'file'} name`); // executes a prompt to allow user to enter name
  }
  /* function that generates a unique ID for the id fields of the tree list */
  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
