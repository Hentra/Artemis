import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StudentQuestionComponent } from 'app/overview/student-questions/student-question/student-question.component';
import { StudentQuestionAnswer } from 'app/entities/student-question-answer.model';
import { StudentQuestion } from 'app/entities/student-question.model';
import { User } from 'app/core/user/user.model';
import { ArtemisTestModule } from '../../test.module';
import { ArtemisSharedModule } from 'app/shared/shared.module';
import { MockActivatedRouteWithSubjects } from '../../helpers/mocks/activated-route/mock-activated-route-with-subjects';

chai.use(sinonChai);
const expect = chai.expect;

describe('StudentQuestionComponent', () => {
    let component: StudentQuestionComponent;
    let componentFixture: ComponentFixture<StudentQuestionComponent>;

    const user1 = {
        id: 1,
    } as User;

    const user2 = {
        id: 2,
    } as User;

    const unApprovedStudentQuestionAnswer = {
        id: 1,
        answerDate: undefined,
        answerText: 'not approved',
        tutorApproved: false,
        author: user1,
    } as StudentQuestionAnswer;

    const approvedStudentQuestionAnswer = {
        id: 2,
        answerDate: undefined,
        answerText: 'approved',
        tutorApproved: true,
        author: user2,
    } as StudentQuestionAnswer;

    const studentQuestion = {
        id: 1,
        questionText: 'question',
        creationDate: undefined,
        answers: [unApprovedStudentQuestionAnswer, approvedStudentQuestionAnswer],
    } as StudentQuestion;

    beforeEach(async () => {
        return TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot(), ArtemisTestModule, ArtemisSharedModule],
            declarations: [StudentQuestionComponent],
            providers: [{ provide: ActivatedRoute, useClass: MockActivatedRouteWithSubjects }],
        })
            .overrideTemplate(StudentQuestionComponent, '')
            .compileComponents()
            .then(() => {
                componentFixture = TestBed.createComponent(StudentQuestionComponent);
                component = componentFixture.componentInstance;
            });
    });

    it('should toggle edit mode and reset editor Text', () => {
        component.studentQuestion = studentQuestion;
        component.isEditMode = true;
        component.editText = 'test';
        component.toggleEditMode();
        expect(component.editText).to.deep.equal('question');
        expect(component.isEditMode).to.be.false;
        component.toggleEditMode();
        expect(component.isEditMode).to.be.true;
    });

    it('should update questionText', () => {
        component.studentQuestion = studentQuestion;
        component.isEditMode = true;
        component.editText = 'test';
        component.saveQuestion();
        expect(component.studentQuestion.questionText).to.deep.equal('test');
    });
});
