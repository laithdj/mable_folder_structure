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
  addNode(type: 'file' | 'folder', item?: NodeModel) {
    let name = this.getNodeName();
    if (!name) {
      alert("Name is required. Cancelling the operation");
      return;
    }
    if (item) {
      let already = item.children?.find(f => f.name?.toLowerCase() == name?.toLowerCase());
      if (already) {
        alert("Name already exists. Cancelling the operation");
        return;
      }
    } else {
      let already = this.nodes.find(f => f.name?.toLowerCase() == name?.toLowerCase());
      if (already) {
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

  deleteNode(list:NodeModel[], index:number, type: 'folder' | 'file') {
    if(confirm(`Are you sure you want to delete this ${type}?`)) {
      list.splice(index, 1);
    }
  }
  getNodeName(folder?: boolean) {
    return prompt(`Please type the ${folder ? 'folder' : 'file'} name`);
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
