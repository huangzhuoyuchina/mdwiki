///<reference path="../../typings/tsd.d.ts" />

module MDwiki.Gimmick {

    export interface IMultilineGimmickHandler {
        (trigger: string, content: string, options: any, domElement: any): void;
    }
    export interface ISinglelineGimmickCallback {
        (trigger: string, content: string, options: any, domElement: any): void;
    }
    export interface ILinkGimmickHandler {
        (trigger: string, options: any, domElement:any)
    }

    export class GimmickHandler {
        callback: any;
        loadStage:string = 'gimmick';
        kind: string = 'link';
    }

    export class Gimmick {
        name: string;
        private handlers: GimmickHandler[] = [];
        init () {
        }
        constructor(name: string) {
            this.name = name;
        }
        addHandler(handlerDescription: any) {
            if (!handlerDescription.loadStage)
                handlerDescription.loadStage = "gimmick";
            this.handlers.push(handlerDescription);
        }
    }

    export class GimmickLoader {
        private gimmicks: Gimmick[] = [];

    }
}