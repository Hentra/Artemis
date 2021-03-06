import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminState } from './admin.route';
import { ArtemisSharedModule } from 'app/shared/shared.module';
import { FormDateTimePickerModule } from 'app/shared/date-time-picker/date-time-picker.module';
import { AdminFeatureToggleComponent } from 'app/admin/features/admin-feature-toggle.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TagInputModule } from 'ngx-chips';
import { UserManagementDetailComponent } from 'app/admin/user-management/user-management-detail.component';
import { LogsComponent } from 'app/admin/logs/logs.component';
import { JhiMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { HealthComponent } from 'app/admin/health/health.component';
import { JhiConfigurationComponent } from 'app/admin/configuration/configuration.component';
import { SystemNotificationManagementComponent } from 'app/admin/system-notification-management/system-notification-management.component';
import { SystemNotificationManagementUpdateComponent } from 'app/admin/system-notification-management/system-notification-management-update.component';
import { JhiTrackerComponent } from 'app/admin/tracker/tracker.component';
import { AuditsComponent } from 'app/admin/audits/audits.component';
import { HealthModalComponent } from 'app/admin/health/health-modal.component';
import { UserManagementComponent } from 'app/admin/user-management/user-management.component';
import { UserManagementUpdateComponent } from 'app/admin/user-management/user-management-update.component';
import { SystemNotificationManagementDetailComponent } from 'app/admin/system-notification-management/system-notification-management-detail.component';
import { UpcomingExamsAndExercisesComponent } from './upcoming-exams-and-exercises/upcoming-exams-and-exercises.component';

/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

const ENTITY_STATES = [...adminState];

@NgModule({
    imports: [
        RouterModule.forChild(ENTITY_STATES),
        ArtemisSharedModule,
        FormDateTimePickerModule,
        NgxDatatableModule,
        TagInputModule,
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserManagementComponent,
        UserManagementDetailComponent,
        UserManagementUpdateComponent,
        SystemNotificationManagementComponent,
        SystemNotificationManagementDetailComponent,
        SystemNotificationManagementUpdateComponent,
        LogsComponent,
        JhiConfigurationComponent,
        HealthComponent,
        HealthModalComponent,
        JhiTrackerComponent,
        JhiMetricsMonitoringComponent,
        AdminFeatureToggleComponent,
        UpcomingExamsAndExercisesComponent,
    ],
    entryComponents: [HealthModalComponent],
})
export class ArtemisAdminModule {}
