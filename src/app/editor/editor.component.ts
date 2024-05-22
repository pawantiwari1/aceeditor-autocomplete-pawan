import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  OnDestroy,
  Inject,
} from '@angular/core';

import { CompleterService } from './../services/completer.service';
import { MetaInfoModel } from './../models/metadata.model';

import * as ace from 'brace';
import 'brace/mode/python';
import 'brace/ext/language_tools';
import 'brace/snippets/python';
import 'brace/theme/monokai';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  metaInfo: MetaInfoModel[];
  script = 'import sys\n\nprint("test")';
  options = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
  };

  @ViewChild('editor', { static: true })
  editor: any;

  constructor(@Inject(CompleterService) completer: CompleterService) {
    console.log('meta info ', this.metaInfo);
    setTimeout(() => {
      completer.setMetadata(this.metaInfo);
      const langTools = ace.acequire('ace/ext/language_tools');
      console.log('ace language tool ', langTools);
      langTools.setCompleters([completer]);
    }, 400);
  } //private completer: CompleterService

  ngOnInit() {
    console.log('meta info ', this.metaInfo);
    // completer.setMetadata(this.metaInfo);
  }

  ngAfterViewInit() {
    // const langTools = ace.acequire('ace/ext/language_tools');
    // console.log("ace language tool ",langTools);
    // langTools.setCompleters([this.completer]);
  }

  ngOnDestroy(): void {
    // Вернем дефолтные комплетеры
    const langTools = ace.acequire('ace/ext/language_tools');
    const { textCompleter, keyWordCompleter, snippetCompleter } = langTools;
    langTools.setCompleters([
      textCompleter,
      keyWordCompleter,
      snippetCompleter,
    ]);
  }

  getEditor(): ace.Editor {
    return this.editor._editor;
  }
}
