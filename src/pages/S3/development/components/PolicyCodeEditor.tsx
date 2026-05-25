// React and related imports
import { useState } from "react";

type PolicyConfig = {
    sid: { editable: boolean; default: string };
    principal: { editable: boolean; default: string };
    resource: { editable: boolean; default: string };
    actions: string[];
};

const configs: Record<"public" | "iam", PolicyConfig> = {
    public: {
        sid: { editable: true, default: '"Statement id can be anything"' },
        principal: { editable: true, default: '"*"' },
        resource: { editable: true, default: '"arn:aws:s3:::bucket-name/*"' },
        actions: ["s3:GetObject", "s3:ListBucket", "s3:PutObject",
            "s3:DeleteObject", "s3:PutBucketPolicy", "s3:DeleteBucketPolicy", "s3:*"],
    },
    iam: {
        sid: { editable: false, default: '"CLI Access"' },
        principal: { editable: false, default: '"arn:partition:service:region:account-id:resource"' },
        resource: { editable: false, default: '"arn:aws:s3:::bucket-name/*"' },
        actions: ["s3:GetObject", "s3:ListBucket", "s3:PutObject", "s3:DeleteObject"],
    },
};

export default function PolicyCodeEditor({ mode }: { mode: "public" | "iam" }) {
    const config = configs[mode];

    const [sid, setSid] = useState(config.sid.default);
    const [principal, setPrincipal] = useState(config.principal.default);
    const [resource, setResource] = useState(config.resource.default);
    const [effect, setEffect] = useState('"Allow"');
    const [action, setAction] = useState(config.actions[0]);

    return (
        <div className="code-section">
            <span className="json-code">{`{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Sid": `}</span>

            <EditableField
                value={sid}
                onChange={setSid}
                editable={config.sid.editable}
            />

            <span className="json-code">{`,\n    "Effect": `}</span>
            <select className="json-code-select" value={effect} onChange={e => setEffect(e.target.value)}>
                <option>"Allow"</option>
                <option>"Deny"</option>
            </select>

            <span className="json-code">{`,\n    "Principal": `}</span>
            <EditableField
                value={principal}
                onChange={setPrincipal}
                editable={config.principal.editable}
            />

            <span className="json-code">{`,\n    "Action": `}</span>
            <select className="json-code-select" value={action} onChange={e => setAction(e.target.value)}>
                {config.actions.map(a => <option key={a}>{a}</option>)}
            </select>

            <span className="json-code">{`,\n    "Resource": `}</span>
            <EditableField
                value={resource}
                onChange={setResource}
                editable={config.resource.editable}
            />

            <span className="json-code">{`\n  }]\n}`}</span>
        </div>
    );
}

function EditableField({ value, onChange, editable }: {
    value: string;
    onChange: (v: string) => void;
    editable: boolean;
}) {
    if (!editable)
        return <span className="json-code">{value}</span>;

    return (
        <input
            type="text"
            className="json-code-text"
            value={value}
            onChange={e => onChange(e.target.value)}
            size={Math.max(value.length, 1)}
        />
    );
}