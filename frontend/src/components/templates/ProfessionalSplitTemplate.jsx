import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ProfessionalSplitTemplate = ({ data, accentColor }) => {

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 text-gray-800">

      {/* Header */}
      <header className="mb-8 border-b pb-4" style={{ borderColor: accentColor }}>
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          {data.personal_info?.email && (
            <div className="flex gap-1 items-center">
              <Mail size={14} />
              {data.personal_info.email}
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex gap-1 items-center">
              <Phone size={14} />
              {data.personal_info.phone}
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex gap-1 items-center">
              <MapPin size={14} />
              {data.personal_info.location}
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex gap-1 items-center break-all">
              <Linkedin size={14} />
              {data.personal_info.linkedin}
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex gap-1 items-center break-all">
              <Globe size={14} />
              {data.personal_info.website}
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">

        {/* Left Column */}
        <aside className="col-span-1 space-y-6">

          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                Summary
              </h2>

              <p className="text-sm text-gray-700">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                Education
              </h2>

              <div className="space-y-3 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold">
                      {edu.degree}
                    </p>

                    <p>{edu.institution}</p>

                    <p className="text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </aside>

        {/* Right Column */}
        <main className="col-span-2 space-y-6">

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: accentColor }}>
                Experience
              </h2>

              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">{exp.position}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>

                      <p className="text-sm text-gray-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </p>
                    </div>

                    {exp.description && (
                      <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ color: accentColor }}>
                Projects
              </h2>

              <div className="space-y-3">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{proj.name}</h3>

                    <p className="text-sm text-gray-700">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
};

export default ProfessionalSplitTemplate;