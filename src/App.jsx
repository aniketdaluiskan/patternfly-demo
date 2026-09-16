import React, { useState } from 'react';
import {
  Page,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadContent,
  Nav,
  NavList,
  NavItem,
  Title,
  Content,
  ContentVariants,
  Button,
  TextInput,
  FormGroup,
  Form,
  FormSelect,
  FormSelectOption,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Tabs,
  Tab,
  TabTitleText,
  TabContent,
  Modal,
  ModalVariant,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  ExpandableSection,
  Alert,
  AlertGroup,
  Divider,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';

const NAV_SECTIONS = [
  { id: 'nav-form-controls', label: 'Form Controls' },
  { id: 'nav-tabs', label: 'Tabs' },
  { id: 'nav-overlays', label: 'Modal & Menus' },
  { id: 'nav-expandable', label: 'Expandable Section' },
  { id: 'nav-table', label: 'Data Table' },
  { id: 'nav-alerts', label: 'Alerts' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const SAMPLE_ROWS = [
  { id: 1, name: 'Order intake service', owner: 'Priya Nair', environment: 'Production', status: 'Healthy' },
  { id: 2, name: 'Billing reconciliation job', owner: 'Marcus Webb', environment: 'Staging', status: 'Degraded' },
  { id: 3, name: 'Notification dispatcher', owner: 'Sofia Alvarez', environment: 'Production', status: 'Healthy' },
  { id: 4, name: 'Reporting pipeline', owner: 'Daniel Kim', environment: 'Development', status: 'Offline' },
];

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [activeNavId, setActiveNavId] = useState('nav-form-controls');

  // Form control state
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('us-east-1');
  const [isChecked, setIsChecked] = useState(true);
  const [radioValue, setRadioValue] = useState('daily');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(40);

  // Tabs
  const [activeTabKey, setActiveTabKey] = useState(0);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dropdown / Menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Expandable section
  const [isExpanded, setIsExpanded] = useState(false);

  // Alerts
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            variant="plain"
            aria-label="Global navigation toggle"
            isSidebarOpen={isNavOpen}
            onSidebarToggle={() => setIsNavOpen((open) => !open)}
            id="page-nav-toggle"
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <Title headingLevel="h1" size="xl">
            Component Test Console
          </Title>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="masthead-toolbar" aria-label="Masthead actions toolbar">
          <ToolbarContent>
            <ToolbarItem>
              <Button
                variant="plain"
                aria-label="Notifications"
                icon={<BellIcon />}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain" aria-label="Settings" icon={<CogIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain" aria-label="User account" icon={<UserIcon />} />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isNavOpen} id="page-sidebar">
      <PageSidebarBody>
        <Nav aria-label="Primary section navigation">
          <NavList>
            {NAV_SECTIONS.map((section) => (
              <NavItem
                key={section.id}
                itemId={section.id}
                isActive={activeNavId === section.id}
                onClick={() => {
                  setActiveNavId(section.id);
                  scrollToSection(section.id);
                }}
              >
                {section.label}
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar} isManagedSidebar={false}>
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="2xl">
          PatternFly Component Demo
        </Title>
        <Content>
          <Content component={ContentVariants.p}>
            A single-page reference application exercising a broad set of
            PatternFly React components with semantic, accessible markup. Use
            the navigation on the left to jump to a section.
          </Content>
        </Content>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Form Controls                                                    */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-form-controls" aria-labelledby="form-controls-heading">
        <Title headingLevel="h2" size="xl" id="form-controls-heading">
          Form Controls
        </Title>
        <Content component={ContentVariants.p}>
          Buttons, text input, select, checkbox, radio, switch, and slider.
        </Content>

        <Form>
          <FormGroup label="Service name" isRequired fieldId="service-name-input">
            <TextInput
              isRequired
              type="text"
              id="service-name-input"
              name="service-name-input"
              placeholder="e.g. order-intake-service"
              value={textValue}
              onChange={(_event, value) => setTextValue(value)}
            />
          </FormGroup>

          <FormGroup label="Deployment region" fieldId="region-select">
            <FormSelect
              id="region-select"
              value={selectValue}
              onChange={(_event, value) => setSelectValue(value)}
              aria-label="Deployment region"
            >
              <FormSelectOption value="us-east-1" label="US East (N. Virginia)" />
              <FormSelectOption value="us-west-2" label="US West (Oregon)" />
              <FormSelectOption value="eu-west-1" label="EU West (Ireland)" />
              <FormSelectOption value="ap-south-1" label="Asia Pacific (Mumbai)" />
            </FormSelect>
          </FormGroup>

          <FormGroup role="group" fieldId="notification-checkbox" label="Notifications">
            <Checkbox
              id="notification-checkbox"
              label="Send email notifications on failure"
              isChecked={isChecked}
              onChange={(_event, checked) => setIsChecked(checked)}
            />
          </FormGroup>

          <FormGroup role="radiogroup" fieldId="schedule-radio-group" label="Report frequency">
            <Radio
              id="schedule-radio-daily"
              name="schedule-radio-group"
              label="Daily"
              isChecked={radioValue === 'daily'}
              onChange={() => setRadioValue('daily')}
            />
            <Radio
              id="schedule-radio-weekly"
              name="schedule-radio-group"
              label="Weekly"
              isChecked={radioValue === 'weekly'}
              onChange={() => setRadioValue('weekly')}
            />
            <Radio
              id="schedule-radio-monthly"
              name="schedule-radio-group"
              label="Monthly"
              isChecked={radioValue === 'monthly'}
              onChange={() => setRadioValue('monthly')}
            />
          </FormGroup>

          <FormGroup fieldId="maintenance-switch" label="Maintenance mode">
            <Switch
              id="maintenance-switch"
              label="Maintenance mode enabled"
              labelOff="Maintenance mode disabled"
              isChecked={isSwitchOn}
              onChange={(_event, checked) => setIsSwitchOn(checked)}
            />
          </FormGroup>

          <FormGroup fieldId="cpu-slider" label={`CPU allocation limit (${sliderValue}%)`}>
            <Slider
              id="cpu-slider"
              value={sliderValue}
              onChange={(_event, value) => setSliderValue(value)}
              min={0}
              max={100}
              step={5}
              isInputVisible
              inputLabel="%"
              inputAriaLabel="CPU allocation limit percent"
              aria-label="CPU allocation limit"
            />
          </FormGroup>

          <div className="pf-v5-u-display-flex pf-v5-u-gap-md">
            <Button variant="primary" type="button" onClick={() => setIsModalOpen(true)}>
              Save configuration
            </Button>
            <Button variant="secondary" type="button">
              Reset to defaults
            </Button>
            <Button variant="link" type="button">
              Cancel
            </Button>
          </div>
        </Form>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Tabs                                                             */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-tabs" aria-labelledby="tabs-heading">
        <Title headingLevel="h2" size="xl" id="tabs-heading">
          Tabs
        </Title>
        <Tabs
          activeKey={activeTabKey}
          onSelect={(_event, tabIndex) => setActiveTabKey(tabIndex)}
          aria-label="Service detail tabs"
          role="region"
        >
          <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} tabContentId="tab-content-overview">
            <TabContent id="tab-content-overview" eventKey={0}>
              <Content component={ContentVariants.p} className="pf-v5-u-mt-md">
                The order intake service accepts inbound requests, validates
                payloads, and forwards them to the processing queue.
              </Content>
            </TabContent>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Metrics</TabTitleText>} tabContentId="tab-content-metrics">
            <TabContent id="tab-content-metrics" eventKey={1}>
              <Content component={ContentVariants.p} className="pf-v5-u-mt-md">
                Average response time: 128ms. Requests per minute: 4,300.
                Error rate over the last 24 hours: 0.4%.
              </Content>
            </TabContent>
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Configuration</TabTitleText>} tabContentId="tab-content-configuration">
            <TabContent id="tab-content-configuration" eventKey={2}>
              <Content component={ContentVariants.p} className="pf-v5-u-mt-md">
                Auto-scaling is enabled with a minimum of 2 and a maximum of
                8 replicas.
              </Content>
            </TabContent>
          </Tab>
        </Tabs>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Modal & Menus                                                    */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-overlays" aria-labelledby="overlays-heading">
        <Title headingLevel="h2" size="xl" id="overlays-heading">
          Modal &amp; Menus
        </Title>
        <div className="pf-v5-u-display-flex pf-v5-u-gap-md pf-v5-u-align-items-center">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open confirmation modal
          </Button>

          <Dropdown
            isOpen={isDropdownOpen}
            onSelect={() => setIsDropdownOpen(false)}
            onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setIsDropdownOpen((open) => !open)}
                isExpanded={isDropdownOpen}
              >
                Bulk actions
              </MenuToggle>
            )}
          >
            <DropdownList>
              <DropdownItem key="restart">Restart service</DropdownItem>
              <DropdownItem key="scale">Scale replicas</DropdownItem>
              <DropdownItem key="separator" isSeparator />
              <DropdownItem key="delete" isDanger>
                Delete service
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </div>

        <Modal
          variant={ModalVariant.small}
          title="Confirm configuration save"
          titleIconVariant="warning"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          actions={[
            <Button key="confirm" variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>,
            <Button key="cancel" variant="link" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>,
          ]}
        >
          This will apply the updated configuration to the selected service
          immediately. Existing connections will not be interrupted.
        </Modal>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Expandable Section                                               */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-expandable" aria-labelledby="expandable-heading">
        <Title headingLevel="h2" size="xl" id="expandable-heading">
          Expandable Section
        </Title>
        <ExpandableSection
          toggleText={isExpanded ? 'Hide advanced settings' : 'Show advanced settings'}
          onToggle={(_event, expanded) => setIsExpanded(expanded)}
          isExpanded={isExpanded}
        >
          <Content component={ContentVariants.p}>
            Advanced settings include request timeout thresholds, retry
            policy configuration, and circuit breaker sensitivity. Changing
            these values may affect downstream consumers.
          </Content>
        </ExpandableSection>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Data Table                                                       */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-table" aria-labelledby="table-heading">
        <Title headingLevel="h2" size="xl" id="table-heading">
          Data Table
        </Title>
        <table className="pf-v5-c-table pf-m-grid-md" role="grid" aria-label="Service status table">
          <caption>Current status of monitored services</caption>
          <thead>
            <tr role="row">
              <th role="columnheader" scope="col">Service name</th>
              <th role="columnheader" scope="col">Owner</th>
              <th role="columnheader" scope="col">Environment</th>
              <th role="columnheader" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_ROWS.map((row) => (
              <tr key={row.id} role="row">
                <td role="cell" data-label="Service name">{row.name}</td>
                <td role="cell" data-label="Owner">{row.owner}</td>
                <td role="cell" data-label="Environment">{row.environment}</td>
                <td role="cell" data-label="Status">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageSection>

      <Divider />

      {/* ---------------------------------------------------------------- */}
      {/* Alerts                                                           */}
      {/* ---------------------------------------------------------------- */}
      <PageSection id="nav-alerts" aria-labelledby="alerts-heading">
        <Title headingLevel="h2" size="xl" id="alerts-heading">
          Alerts
        </Title>
        <AlertGroup>
          {showSuccessAlert && (
            <Alert
              variant="success"
              title="Configuration saved successfully"
              timeout={false}
              actionClose={
                <Button
                  variant="plain"
                  aria-label="Close success alert"
                  onClick={() => setShowSuccessAlert(false)}
                >
                  &times;
                </Button>
              }
            />
          )}
          {showWarningAlert && (
            <Alert
              variant="warning"
              title="Staging environment has degraded response times"
              className="pf-v5-u-mt-md"
              actionClose={
                <Button
                  variant="plain"
                  aria-label="Close warning alert"
                  onClick={() => setShowWarningAlert(false)}
                >
                  &times;
                </Button>
              }
            />
          )}
          <Alert
            variant="danger"
            isInline
            title="Reporting pipeline is offline"
            className="pf-v5-u-mt-md"
          />
          <Alert
            variant="info"
            isInline
            title="A new platform release is scheduled for this weekend"
            className="pf-v5-u-mt-md"
          />
        </AlertGroup>
      </PageSection>
    </Page>
  );
}
