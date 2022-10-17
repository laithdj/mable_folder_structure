export class NodeModel {
    type: 'folder' | 'file' | 'unset' | null = "folder";
    name?: string;
    children?: NodeModel[];
    id: string = '';
    checked?: boolean;//in order to expand/collapse
}