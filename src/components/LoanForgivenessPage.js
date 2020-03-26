import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/forgiveness.css'

class LoanForgivenessPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7', overflow:'auto'}}>
        <MoolahNavBar />
        <br></br>
        <div style={{paddingRight: '50px'}} className="float-right">
          <br></br>
          <br></br>
          <div style={{position: 'fixed'}}>
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
        </div>
        <div style={{paddingLeft: '75px'}} className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <h3>Student Loan Forgiveness</h3>
          <p>
           In certain situations, you can have your federal student loans forgiven,
           canceled, or discharged. Learn more about the types of forgiveness and
           whether you qualify due to your job or other circumstances.
          </p>
          <Button variant="info">Apply for Student Loan Forgiveness</Button>
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

export default LoanForgivenessPage;
