import { DatePipe } from '@angular/common'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import {
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons'
import { IfPermissionsDirective } from 'src/app/directives/if-permissions.directive'
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe'
import { DocumentTitlePipe } from 'src/app/pipes/document-title.pipe'
import { IsNumberPipe } from 'src/app/pipes/is-number.pipe'
import { SafeUrlPipe } from 'src/app/pipes/safeurl.pipe'
import { CustomFieldDisplayComponent } from '../../common/custom-field-display/custom-field-display.component'
import { PreviewPopupComponent } from '../../common/preview-popup/preview-popup.component'
import { DocumentCardTinyComponent } from './document-card-tiny.component'

const doc = {
  id: 10,
  title: 'Document 10',
  tags: [3, 4, 5],
  correspondent: 8,
  document_type: 10,
  storage_path: null,
  page_count: 8,
  notes: [
    {
      id: 11,
      note: 'This is some note content bananas',
    },
  ],
  content:
    'Cupcake ipsum dolor sit amet ice cream. Donut shortbread cheesecake caramels tiramisu pastry caramels chocolate bar. Tart tootsie roll muffin icing cotton candy topping sweet roll. Pie lollipop dragée sesame snaps donut tart pudding. Oat cake apple pie danish danish candy canes. Shortbread candy canes sesame snaps muffin tiramisu marshmallow chocolate bar halvah. Cake lemon drops candy apple pie carrot cake bonbon halvah pastry gummi bears. Sweet roll candy ice cream sesame snaps marzipan cookie ice cream. Cake cheesecake apple pie muffin candy toffee lollipop. Carrot cake oat cake cookie biscuit cupcake cake marshmallow. Sweet roll jujubes carrot cake cheesecake cake candy canes sweet roll gingerbread jelly beans. Apple pie sugar plum oat cake halvah cake. Pie oat cake chocolate cake cookie gingerbread marzipan. Lemon drops cheesecake lollipop danish marzipan candy.',
}

describe('DocumentCardLargeComponent', () => {
  let component: DocumentCardTinyComponent
  let fixture: ComponentFixture<DocumentCardTinyComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbPopoverModule,
        NgbTooltipModule,
        NgbProgressbarModule,
        NgxBootstrapIconsModule.pick(allIcons),
        DocumentCardTinyComponent,
        DocumentTitlePipe,
        CustomDatePipe,
        IfPermissionsDirective,
        SafeUrlPipe,
        IsNumberPipe,
        PreviewPopupComponent,
        CustomFieldDisplayComponent,
      ],
      providers: [
        DatePipe,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(DocumentCardTinyComponent)
    component = fixture.componentInstance
    component.document = doc
    fixture.detectChanges()
    jest.useFakeTimers()
  })


})
