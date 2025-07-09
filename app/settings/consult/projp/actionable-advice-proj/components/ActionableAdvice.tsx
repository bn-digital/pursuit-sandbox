// app/settings/consult/projp/actionable-advice-proj/components/ActionableAdvice.tsx
// version: 1
// author: YuriiIlkevych/BNDigital

// We use 'any' intentionally, as this is a placeholder.
// The consultant is responsible for implementing the correct, strong types.
/* eslint-disable @typescript-eslint/no-explicit-any */

interface ErrorData {
  hasError: boolean;
  type: string;
  message: string
};

interface MeetingContext {
  meetingId: number;
  attendee: string;
  dateTime: string;
};

interface LeadershipGoal {
  style: string;
  trait: string;
};

interface FeedbackSEction {
  title: string;
  text: string;
};

interface Feedback {
  originalStatement: FeedbackSEction;
  analysis: FeedbackSEction;
  suggestion: FeedbackSEction;
};

interface ActionableAdvice {
  feedback: Feedback;
  leadershipGoal: LeadershipGoal;
  meetingContext: MeetingContext
};

interface ActionableAdviceProps {
  data: {
    error: ErrorData,
    actionableAdvice: ActionableAdvice | null
  };
}

/**
 * This is a placeholder for the real ActionableAdvice component.
 * It simply renders the raw JSON data it receives.
 */
export default function ActionableAdvice({ data }: ActionableAdviceProps) {

  if (data.error.hasError) {
    return (
      <>
        
        {/* {`ActionableAdvice Component Error:
        Type: ${data.error.type}
        Message: ${data.error.message}`} */}
       
      </>
    );
  };

  if (!data.actionableAdvice) return null;


  return (
    <div>
      <h3 className="text-md font-semibold text-neutral-600 mb-2">
        Rendered Component Output:
      </h3>
      {/* 
        The real ActionableAdvice UI will be built here.
        The consultant will replace this <pre> block with the actual component implementation.
      */}

      <section className="box-border flex relative flex-col shrink-0 gap-6 mt-5">
        <header className="relative self-stretch w-full text-3xl font-semibold tracking-tight">
          Actionable advice
        </header>

        <div className="flex flex-col gap-3 items-start p-4 mx-auto my-0 w-full max-w-screen-lg">
          {/* Meeting Information Header */}
          <div className="box-border flex relative flex-row shrink-0 gap-8 px-6 w-full">
            <div className="box-border flex relative flex-col grow shrink-0 gap-0.5 w-auto">
              <time className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                11:30 am, Oct 2nd
              </time>
              <h3 className="box-border relative shrink-0 h-auto text-base text-zinc-800 font-medium">
                Meeting with Terry
              </h3>
            </div>

            <div className="box-border flex relative flex-row shrink-0 gap-6 self-center">
              <div className="box-border flex relative flex-col shrink-0 gap-0.5 w-auto">
                <span className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                  Leadership Style
                </span>
                <div className="box-border flex relative flex-row shrink-0 gap-1 justify-start items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0"
                    className="box-border object-cover overflow-hidden shrink-0 w-4 h-4"
                    alt="Leadership style icon"
                  />
                  <span className="box-border relative shrink-0 h-auto text-base text-zinc-800">
                    Transformational
                  </span>
                </div>
              </div>

              <div className="box-border flex relative flex-col shrink-0 gap-0.5 w-auto">
                <span className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                  Trait
                </span>
                <div className="box-border flex relative flex-row shrink-0 gap-1 justify-start items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0"
                    className="box-border object-cover overflow-hidden shrink-0 w-4 h-4"
                    alt="Trait icon"
                  />
                  <span className="box-border relative shrink-0 h-auto text-base text-zinc-800">
                    Inspiring
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Advice Cards Grid */}
          <div className="box-border relative shrink-0 gap-4 w-full">
            <div className="flex gap-5 max-md:flex-col">
              {/* What you said card */}
              <article className="w-[33%] max-md:ml-0 max-md:w-full">
                <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-white rounded shadow">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0"
                    className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                    alt="What you said icon"
                  />
                  <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                    <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-semibold">
                      What you said
                    </h4>
                    <blockquote className="box-border relative shrink-0 h-auto text-lg italic font-light text-zinc-700">
                      It might be good if you could aim to get that done by next
                      week, but no worries if it's tricky—just let me know what
                      you think.
                    </blockquote>
                  </div>
                </div>
              </article>

              {/* Why it matters card */}
              <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-white rounded shadow">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0"
                    className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                    alt="Why it matters icon"
                  />
                  <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                    <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-semibold">
                      Why it matters
                    </h4>
                    <p className="box-border relative shrink-0 h-auto text-lg font-light leading-snug text-zinc-700">
                      You sidestepped tension. It may have been strategic — but
                      you also risked leaving something unresolved that matters
                      to your teammate.
                    </p>
                  </div>
                </div>
              </article>

              {/* Try this next time card */}
              <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-white rounded shadow">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0"
                    className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                    alt="Try this next time icon"
                  />
                  <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                    <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-semibold">
                      Try this next time
                    </h4>
                    <p className="box-border relative shrink-0 h-auto text-lg font-light leading-snug text-zinc-700">
                      I need you to deliver that by end of next week. Let me
                      know today if you see any blockers.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Disclaimer */}
          <footer className="box-border flex relative flex-col shrink-0 px-6 w-full mt-6">
            <p className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
              Reflective guidance from recent 1:1s. May not capture full
              context. Use your best judgment.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
