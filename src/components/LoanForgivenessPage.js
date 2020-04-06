import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/forgiveness.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import DownloadLink from "react-download-link";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



class LoanForgivenessPage extends React.Component{
  constructor(){
    super();
    this.state = {
      renderApps: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    this.setState({renderApps: true});
  }
  render(){
    if(this.state.renderApps===true){
      return <ApplyForLoanForgiveness />
    }
    return (
      <div style={{backgroundColor:'#DFF3F7', overflow:'auto'}}>
        <MoolahNavBar />
        <br></br>
        <div style={{paddingRight: '50px', position: '-webkit-sticky', position: 'sticky', top: 0}} className="float-right">
          <Form inline className="float-right">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
          </Form>
          <br></br>
          <br></br>
          <br></br>
            <nav>
              <ul className="side-nav">
                <li><a href="#differences">Differences Between Forgiveness, Cancellation, and Discharge</a></li>
                <li><a href="#types">Types of Forgiveness, Cancellation, and Discharge</a></li>
                <ul className="side-nav">
                  <li><a href="#publicservice">Public Service Loan Forgiveness</a></li>
                  <li><a href="#teacher">Teacher Loan Forgiveness</a></li>
                  <li><a href="#closedschool">Closed School Discharge</a></li>
                  <li><a href="#perkins">Perkins Loan Cancellation and Discharge</a></li>
                  <li><a href="#disability">Total and Permanent Disability Discharge</a></li>
                  <li><a href="#death">Discharge Due to Death</a></li>
                  <li><a href="#bankruptcy">Discharge in Bankruptcy (in rare cases)</a></li>
                  <li><a href="#borrowerdefense">Borrower Defense to Repayment</a></li>
                  <li><a href="#falsecert">False Certification Discharge</a></li>
                  <li><a href="#unpaidrefund">Unpaid Refund Discharge</a></li>
                </ul>
                <li><a href="#parentborrowerers">Eligibility for Parent Borrowers</a></li>
                <li><a href="#apply">How to Apply For Forgiveness</a></li>
                <li><a href="#payments">How to Apply For Forgiveness</a></li>
                <li><a href="#approved">My Application Was Approved</a></li>
                <li><a href="#denied">My Application Was Denied</a></li>
              </ul>
            </nav>
        </div>
        <div style={{paddingLeft: '75px', paddingRight: '500px'}}>
          <h3>Student Loan Forgiveness</h3>
          <p>
           In certain situations, you can have your federal student loans forgiven,
           canceled, or discharged. Learn more about the types of forgiveness and
           whether you qualify due to your job or other circumstances.
          </p>
          <Button onClick={this.handleClick} variant="info">Apply for Student Loan Forgiveness</Button>
          <br></br>
          <br></br>
          <h4 id="differences">Differences Between Forgiveness, Cancellation, and Discharge</h4>
          <p>
            The terms forgiveness, cancellation, and discharge mean nearly the same
            thing, but they’re used in different ways. If you’re no longer required
            to make payments on your loans due to your job, this is generally
            called forgiveness or cancellation. If you’re no longer required to
            make payments on your loans due to other circumstances, such as a
            total and permanent disability or the closure of the school where you
            received your loans, this is generally called discharge.
          </p>
          <h4 id="types">Types of Forgiveness, Cancellation, and Discharge</h4>
          <p>
            The summaries below offer a quick view of the types of forgiveness,
            cancellation, and discharge available for the different types of
            federal student loans.
          </p>
          <div style={{paddingLeft: '100px'}}>
            <h5 id="publicservice">Public Service Loan Forgiveness</h5>
            <p className="note">
            Available for Direct Loans.*
            </p>
            <p>
            If you are employed by a government or not-for-profit organization,
            you may be able to receive loan forgiveness under the Public Service
            Loan Forgiveness (PSLF) Program.
            PSLF forgives the remaining balance on your Direct Loans after
            you have made 120 qualifying monthly payments under a qualifying
            repayment plan while working full-time for a qualifying employer.
            </p>
            <p className="note">
            *Federal Family Education Loan (FFEL) Program loans and Perkins
            Loans may become eligible for Public Service Loan Forgiveness if
            they are consolidated into the Direct Loan Program.
            </p>
            <h5 id="teacher">Teacher Loan Forgiveness</h5>
            <p className="note">
            Available for Direct Loans and FFEL Program loans.
            </p>
            <p>
            If you teach full-time for five complete and consecutive academic
            years in a low-income elementary school, secondary school, or
            educational service agency, you may be eligible for forgiveness
            of up to $17,500 on your Direct Loan or FFEL Program loans.
            </p>
            <h5 id="closedschool">Closed School Discharge</h5>
            <p className="note">
            Available for Direct Loans, FFEL Program loans, and Perkins Loans.
            </p>
            <p>
            If your school closes while you’re enrolled or soon after you
            withdraw, you may be eligible for discharge of your federal student loan.
            </p>
            <h5 id="perkins">Perkins Loan Cancellation and Discharge</h5>
            <p className="note">
            Available only for Federal Perkins Loans.
            </p>
            <p>
            You may be eligible to have all or a portion of your Perkins Loan
            canceled (based on your employment or volunteer service) or discharged
            (under certain conditions). This includes Perkins Loan Teacher Cancellation.
            </p>
            <h5 id="disability">Total and Permanent Disability Discharge</h5>
            <p className="note">
            Available for Direct Loans, FFEL Program loans, and Perkins Loans.
            </p>
            <p>
            If you’re totally and permanently disabled, you may qualify for a
            discharge of your federal student loans and/or Teacher Education
            Assistance for College and Higher Education (TEACH) Grant service obligation.
            </p>
            <h5 id="death">Discharge Due to Death</h5>
            <p className="note">
            Available for Direct Loans, FFEL Program loans, and Perkins Loans.
            </p>
            <p>
            Federal student loans will be discharged due to the death of the
            borrower or of the student on whose behalf a PLUS loan was taken out.
            </p>
            <h5 id="bankruptcy">Discharge in Bankruptcy (in rare cases)</h5>
            <p className="note">
            Available for Direct Loans, FFEL Program loans, and Perkins Loans.
            </p>
            <p>
            In some cases, you can have your federal student loan discharged
            after declaring bankruptcy.
            However, discharge in bankruptcy is not an automatic process.
            </p>
            <h5 id="borrowerdefense">Borrower Defense to Repayment</h5>
            <p className="note">
            Available for Direct Loans.*
            </p>
            <p>
            You may be eligible for discharge of your federal student loans based
            on borrower defense to repayment if you took out the loans to attend
            a school and the school did something or failed to do something related
            to your loan or to the educational services that the loan was intended to pay for.
            The specific requirements to qualify for a borrower defense to repayment discharge
            vary depending on when you received your loan.
            </p>
            <p className="note">
            *Federal Family Education Loan (FFEL) Program loans and Perkins Loans
            may become eligible for borrower defense discharge if they are
            consolidated into the Direct Loan Program.
            </p>
            <h5 id="falsecert">False Certification Discharge</h5>
            <p className="note">
            Available for Direct Loans and FFEL Program loans.
            </p>
            <p>
            You might be eligible for a discharge of your federal student loan
            if your school falsely certified your eligibility to receive a loan.
            </p>
            <h5 id="unpaidrefund">Unpaid Refund Discharge</h5>
            <p className="note">
            Available for Direct Loans and FFEL Program loans.
            </p>
            <p>
            If you withdrew from school and the school didn’t make a required
            return of loan funds to the loan servicer, you might be eligible
            for a discharge of the portion of your federal student loan(s)
            that the school failed to return.
            </p>
          </div>
          <h4 id="parentborrowerers">Eligibility for Parent Borrowers</h4>
          <p>
          As with loans made to students, a parent PLUS loan can be discharged if you die, if you (not the student on whose behalf you obtained the loan) become totally and permanently disabled, or if your loan is discharged in bankruptcy. Your parent PLUS loan may also be discharged if the child for whom you borrowed dies.
          In addition, all or a portion of a parent PLUS Loan may be discharged in any of these circumstances:
          </p>
          <ul>
            <li>The student for whom you borrowed could not complete his or her program because the school closed.</li>
            <li>Your eligibility to receive the loan was falsely certified by the school.</li>
            <li>Your eligibility to receive the loan was falsely certified through identity theft.</li>
            <li>The student withdrew from school, but the school didn’t pay a refund of your loan money that it was required to pay under applicable laws and regulations.</li>
          </ul>
          <h4 id="apply">How to Apply For Forgiveness</h4>
          <p>
          Contact your loan servicer if you think you qualify.
          If you have a Perkins Loan, you should contact the school that
          made the loan or the loan servicer the school has designated.
          </p>
          <h4 id="payments">Loan Payments During the Application Review Period</h4>
          <p>
          Depending on the type of forgiveness, cancellation, or discharge
          you’re applying for, you may have to make payments during your
          application review. Check with your loan servicer to find out whether
           you must continue making payments during the application review period.
          </p>
          <h4 id="approved">My Application Was Approved</h4>
          <p>
          If you qualify for forgiveness, cancellation, or discharge of the
          full amount of your loan, you are no longer obligated to make loan payments. I
          f you qualify for forgiveness, cancellation, or discharge of only a portion of your loan,
          you are responsible for repaying the remaining balance.
          </p>
          <p>
          If you qualify for certain types of loan discharge, you may also
          receive a refund of some or all of the payments you made on the loan,
          and any adverse information related to your delinquency or default on the
          loan may be deleted from your credit record. If the loan was in default,
          the discharge may erase the default status. If you have no other defaulted loans,
          you would regain eligibility for federal student aid.
          </p>
          <h4 id="denied">My Application Was Denied</h4>
          <p>
          If your application was denied, you’ll remain responsible for
          repaying your loan according to the terms of the promissory note
          that you signed. Talk to your loan servicer about repayment options
          if you have a Direct Loan or FFEL Program loan. Check out repayment options.
          </p>
          <p>
          If your loan is in default, visit Getting Out of Default to find
          out how to begin repaying your loan and your options for getting out of default.
          </p>
          <p>If you believe that your application was denied in error,
          contact your loan servicer for more information.
          </p>
        </div>
      </div>
    );
  }
}
class ApplyForLoanForgiveness extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:'#DFF3F7', overflow:'auto', paddingBottom: '50px'}}>
        <MoolahNavBar />
        <br></br>
        <div style={{paddingLeft: '300px', paddingRight: '300px'}}>
          <h3 className="text-center">Apply For Student Loan Forgiveness</h3>
          <br></br>
          <Accordion>
            <Card style={{borderRadius: '8px'}}>
              <Card.Header className="card-headers">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  Deferment
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="form-cards">
                    <p>Cancer Treatment Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/CancerTreatmentDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Economic Hardship Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/EconomicHardshipDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Graduate Fellowship Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/GraduateFellowshipDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>In School Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/InSchoolDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Military Service and Post Active Duty Student Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/MilitaryServiceandPostActiveDutyStudentDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Parent PLUS Borrower Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/ParentPLUSBorrowerDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Rehabilitation Training Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/RehabilitationTrainingDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Temporary Total Disability Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/TemporaryTotalDisabilityDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                  <br></br>
                  <div className="form-cards">
                    <p>Unemployment Deferment</p>
                    <FontAwesomeIcon icon={faFilePdf} />
                    &nbsp;&nbsp;&nbsp;
                    <DownloadLink
                      label="Download Application (PDF)"
                      filename="../ForgivenessAppsPDFs/UnemploymentDeferment.pdf"
                      exportFile={() => "My cached data"}
                    />
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{borderRadius: '8px'}}>
              <Card.Header className="card-headers">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Forbearance
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <div className="form-cards">
                  <p>General Forbearance</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/GeneralForbearance.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Medical or Dental Internship/Residency, National Guard, and DoD Student Loan Repayment</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/MedicalorDentalInternshipResidencyNationalGuardandDoDStudentLoanRepayment.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Student Loan Debt Burden Forbearance</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/StudentLoanDebtBurdenForbearance.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Teacher Forbearance</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/TeacherForbearance.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{borderRadius: '8px'}}>
              <Card.Header className="card-headers">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  Discharge and Forgiveness
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <div className="form-cards">
                  <p>False Certification - Disqualifying Status Discharge</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/FalseCertificationDisqualifyingStatusDischarge.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>False Certification - Unauthorized Signature Discharge</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/FalseCertificationUnauthorizedSignatureDischarge.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>False Certification of Ability to Benefit Discharge</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/FalseCertificationofAbilitytoBenefitDischarge.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>PSLF: Application for Forgiveness</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/PSLFApplicationforForgiveness.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Public Service Loan Forgiveness Employment Certification Form</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/PublicServiceLoanForgivenessEmploymentCertificationForm.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>School Closure Discharge</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/SchoolClosureDischarge.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Teacher Loan Forgiveness</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/TeacherLoanForgiveness.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Total and Permanent Disability - Applicant Representative Designation</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/TotalandPermanentDisabilityApplicantRepresentativeDesignation.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Total and Permanent Disability - Discharge Application</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/TotalandPermanentDisabilityDischargeApplication.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Total and Permanent Disability - Post Discharge Monitoring</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/TotalandPermanentDisabilityPostDischargeMonitoring.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Unpaid Refund Discharge</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/UnpaidRefundDischarge.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{borderRadius: '8px'}}>
              <Card.Header className="card-headers">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                  Loan Rehabilitation
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                <div className="form-cards">
                  <p>Loan Rehabilitation: Income and Expense</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/LoanRehabilitationIncomeandExpense.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                <div className="form-cards">
                  <p>Loan Rehabilitation: Income and Expense Instructions</p>
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;&nbsp;&nbsp;
                  <DownloadLink
                    label="Download Application (PDF)"
                    filename="../ForgivenessAppsPDFs/LoanRehabilitationIncomeandExpenseInstructions.pdf"
                    exportFile={() => "My cached data"}
                  />
                </div>
                <br></br>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

export default LoanForgivenessPage;
